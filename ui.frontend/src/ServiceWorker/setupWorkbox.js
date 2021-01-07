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
import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

export default function() {
    /**
     * Import and Instantiate workbox object.
     */
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js'
    );

    /**
     * Skip waiting for old service worker to stop.
     * This line will remove the old service worker
     * and install the new version immediately.
     *
     * If there are breaking changes with the new update
     * it is advised to remove this line and let the
     * browser handle delete and update of the service worker.
     */
    skipWaiting();

    /**
     * This will claim/control all clients once the service worker is
     * active. If this is not desired, remove this line and the
     * browser will let the service worker control the clients
     * after a page reresh.
     */
    clientsClaim();

    /**
     * `self.__WB_MANIFEST` will be replaced with an array of assets
     * that webpack will be emitting during the compilation process
     * before writing the files in the file system.
     *
     * ```js
     *  Array<{url: String, revision: null|String}>
     * ```
     */
    const precacheAssets = self.__WB_MANIFEST;

    precacheAndRoute(precacheAssets || []);
}
