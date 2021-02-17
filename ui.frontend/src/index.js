/*******************************************************************************
 *
 *     Copyright 2020 Adobe. All rights reserved.
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
import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import getWithPath from 'lodash.get';
import setWithPath from 'lodash.set';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import MutationQueueLink from '@adobe/apollo-link-mutation-queue';

import { Util } from '@magento/peregrine';
import { Adapter } from '@magento/venia-drivers';
import app from '@magento/peregrine/lib/store/actions/app';
import { AppContextProvider } from '@magento/venia-ui/lib/components/App';

import App from './components/App';
import { registerSW } from './registerSW';
import store from './store';
import { AemClient } from '@adobe/aem-pwa-studio-extensions';
import './aemgrid.css';
const { BrowserPersistence } = Util;

const appScope = new URL(__webpack_public_path__, MAGENTO_BACKEND_URL);
const apiBase = new URL('graphql', appScope).toString();
console.log(`Got API base`, apiBase, appScope);
/**
 * The Venia adapter provides basic context objects: a router, a store, a
 * GraphQL client, and some common functions.
 */

// The Venia adapter is not opinionated about auth.
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists.
    const storage = new BrowserPersistence();
    const token = storage.getItem('signin_token');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            store: STORE_VIEW_CODE,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

// https://www.apollographql.com/docs/link/links/error/
const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);

    if (response) {
        const { data, errors } = response;
        let pathToCartItems;

        // It's within the GraphQL spec to receive data and errors, where errors are merely informational and not
        // intended to block. Almost all existing components were not built with this in mind, so we build special
        // handling of this error message so we can deal with it at the time we deem appropriate.
        errors.forEach(({ message, path }, index) => {
            if (
                message === 'Some of the products are out of stock.' ||
                message === 'There are no source items with the in stock status'
            ) {
                if (!pathToCartItems) {
                    pathToCartItems = path.slice(0, -1);
                }

                // Set the error to null to be cleaned up later
                response.errors[index] = null;
            }
        });

        // indicator that we have some cleanup to perform on the response
        if (pathToCartItems) {
            const cartItems = getWithPath(data, pathToCartItems);
            const filteredCartItems = cartItems.filter(
                cartItem => cartItem !== null
            );
            setWithPath(data, pathToCartItems, filteredCartItems);

            const filteredErrors = response.errors.filter(
                error => error !== null
            );
            // If all errors were stock related and set to null, reset the error response so it doesn't throw
            response.errors = filteredErrors.length
                ? filteredErrors
                : undefined;
        }
    }
});

// @see https://www.apollographql.com/docs/link/composition/.
const apolloLink = ApolloLink.from([
    new MutationQueueLink(),
    new RetryLink({
        delay: {
            initial: 300,
            max: Infinity,
            jitter: true
        },
        attempts: {
            max: 5,
            retryIf: error => error && navigator.onLine
        }
    }),
    authLink,
    errorLink,
    // An apollo-link-http Link
    Adapter.apolloLink(apiBase)
]);

const modelClient = new AemClient({
    url,
    config: {
        headers: {
            Authorization: 'Basic YWRtaW46YWRtaW4='
        }
    }
});
ModelManager.initializeAsync({
    modelClient
});

ReactDOM.render(
    <Adapter apiBase={apiBase} apollo={{ link: apolloLink }} store={store}>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Adapter>,
    document.getElementById('root')
);

registerSW();

window.addEventListener('online', () => {
    store.dispatch(app.setOnline());
});
window.addEventListener('offline', () => {
    store.dispatch(app.setOffline());
});
