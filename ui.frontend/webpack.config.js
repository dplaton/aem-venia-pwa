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
const {
    configureWebpack,
    graphQL: { getMediaURL, getStoreConfigData, getPossibleTypes }
} = require('@magento/pwa-buildpack');
const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

/*
 * Define a function that resolves an array of dependencies.
 * If any of this app's dependencies require a module listed in the array,
 * Webpack will load that module from this app's modules folder.
 *
 * Webpack _should_ treat all peer dependencies this way, but it doesn't.
 */
const resolvePeerDependencies = (deps = [], folder = './node_modules') =>
    deps.reduce(
        (acc, dep) => ({ ...acc, [dep]: path.resolve(`${folder}/${dep}`) }),
        {}
    );

module.exports = async env => {
    const mediaUrl = await getMediaURL();
    const storeConfigData = await getStoreConfigData();

    global.MAGENTO_MEDIA_BACKEND_URL = mediaUrl;
    global.LOCALE = storeConfigData.locale.replace('_', '-');

    const possibleTypes = await getPossibleTypes();

    const config = await configureWebpack({
        context: __dirname,
        vendor: [
            '@apollo/client',
            'apollo-cache-persist',
            'informed',
            'react',
            'react-dom',
            'react-feather',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-actions',
            'redux-thunk'
        ],
        special: {
            'react-feather': {
                esModules: true
            }
        },
        env
    });

    /**
     * configureWebpack() returns a regular Webpack configuration object.
     * You can customize the build by mutating the object here, as in
     * this example. Since it's a regular Webpack configuration, the object
     * supports the `module.noParse` option in Webpack, documented here:
     * https://webpack.js.org/configuration/module/#modulenoparse
     */
    config.module.noParse = [/braintree\-web\-drop\-in/];

    config.plugins = [
        ...config.plugins,
        // for AEM development we limit the build to only one chunk
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.DefinePlugin({
            /**
             * Make sure to add the same constants to
             * the globals object in jest.config.js.
             */
            POSSIBLE_TYPES: JSON.stringify(possibleTypes),
            AEM_URL: JSON.stringify(process.env.AEM_URL),
            MAGENTO_BACKEND_URL: JSON.stringify(
                process.env.MAGENTO_BACKEND_URL
            ),
            STORE_NAME: JSON.stringify('Venia'),
            STORE_VIEW_LOCALE: JSON.stringify(global.LOCALE),
            STORE_VIEW_CODE: process.env.STORE_VIEW_CODE
                ? JSON.stringify(process.env.STORE_VIEW_CODE)
                : JSON.stringify(storeConfigData.code)
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new DuplicatePackageCheckerPlugin()
    ];

    const peerDependencies = [
        'react',
        'react-dom',
        '@adobe/aem-react-editable-components',
        '@adobe/aem-spa-component-mapping',
        '@adobe/aem-spa-page-model-manager',
        '@apollo/client',
        '@magento/venia-ui',
        'react-router-dom'
    ];
    config.resolve.alias = Object.assign(
        {},
        config.resolve.alias,
        resolvePeerDependencies(peerDependencies)
    );

    return config;
};
