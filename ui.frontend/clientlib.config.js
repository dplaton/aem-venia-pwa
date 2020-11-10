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

const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const CLIENTLIB_DIR = path.join(__dirname, 'clientlib');

const libsBaseConfig = {
    allowProxy: true,
    serializationFormat: 'xml',
    cssProcessor: ['default:none', 'min:none'],
    jsProcessor: ['default:none', 'min:none']
};

// Config for `aem-clientlib-generator`
module.exports = {
    context: BUILD_DIR,
    clientLibRoot: CLIENTLIB_DIR,
    libs: [
        {
            ...libsBaseConfig,
            name: 'clientlib-venia',
            categories: ['venia.pwa'],
            assets: {
                // Copy entrypoint scripts and stylesheets into the respective ClientLib
                // directories
                js: {
                    files: ['**/*.js'],
                    flatten: false
                },
                css: {
                    files: ['**/*.css'],
                    flatten: false
                },

                // Copy all other files into the `resources` ClientLib directory
                resources: {
                    files: ['**/*.*'],
                    flatten: false,
                    ignore: ['**/*.js', '**/*.css']
                }
            }
        }
    ]
};
