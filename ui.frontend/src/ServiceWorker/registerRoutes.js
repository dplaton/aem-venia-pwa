/*******************************************************************************
 *
 *    Copyright 2020 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/
import { cacheNames } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import {
    isResizedCatalogImage,
    findSameOrLargerImage,
    createCatalogCacheHandler
} from './Utilities/imageCacheHandler';
import { isHTMLRoute } from './Utilities/routeHandler';
import { THIRTY_DAYS, MAX_NUM_OF_IMAGES_TO_CACHE } from './defaults';

/**
 * registerRoutes function contains all the routes that need to
 * be registered with workbox for caching and proxying.
 *
 * @returns {void}
 */
export default function() {
    const catalogCacheHandler = createCatalogCacheHandler();

    registerRoute(
        new RegExp('(robots.txt|favicon.ico|manifest.json)'),
        new StaleWhileRevalidate()
    );

    /**
     * Route that checks for resized catalog images in cache.
     */
    registerRoute(isResizedCatalogImage, ({ url, request, event }) => {
        const sameOrLargerImagePromise = findSameOrLargerImage(url, request);
        event.waitUntil(sameOrLargerImagePromise);
        return sameOrLargerImagePromise.then(
            response =>
                response || catalogCacheHandler.handle({ request, event })
        );
    });

    /**
     * Route to handle all types of images. Stores them in cache with a
     * cache name "images". They auto expire after 30 days and only 60
     * can be stored at a time.
     */
    registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        new CacheFirst({
            cacheName: 'images',
            plugins: [
                new ExpirationPlugin({
                    maxEntries: MAX_NUM_OF_IMAGES_TO_CACHE, // 60 Images
                    maxAgeSeconds: THIRTY_DAYS // 30 Days
                })
            ]
        })
    );

    /**
     * Route for all JS files and bundles. This route uses CacheFirst
     * strategy because if the file contents change, the file name will
     * change. There is no point in using StaleWhileRevalidate for JS files.
     */
    registerRoute(new RegExp(/\.js$/), new CacheFirst());

    /**
     * Route for HTML files. This route uses a custom plugin
     * to intercept all HTML file requests and return the response for
     * `index.html` which is the default file. This enables the app to have
     * offline capabilities by returning HTML for `index.html` irrespective
     * of the route that was requsted since all routes use same HTML file.
     *
     * Also the cacheName is the precache cache name configured on workbox.
     * This is because when a new version of the app is deployed, SW will be
     * updated with new assets and delete the old `index.html` file. This will
     * make sure that the SW will fetch the `index.html` file when the user
     * requests from the server the first time. From next time onwards, the
     * file from cache will be served till a new version of the app deployed
     * and the cycle repeats.
     */
    registerRoute(
        ({ url }) => isHTMLRoute(url),
        new StaleWhileRevalidate({
            plugins: [
                {
                    cacheKeyWillBeUsed: () => 'index.html'
                }
            ],
            cacheName: cacheNames.precache
        })
    );
}
