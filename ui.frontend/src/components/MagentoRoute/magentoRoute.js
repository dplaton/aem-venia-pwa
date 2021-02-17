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
import React from 'react';
import ErrorView from '@magento/venia-ui/lib/components/ErrorView';
import {
    INTERNAL_ERROR,
    NOT_FOUND,
    useMagentoRoute
} from '@magento/peregrine/lib/talons/MagentoRoute';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AemRoute from '@adobe/aem-pwa-studio-extensions';

const MESSAGES = new Map()
    .set(NOT_FOUND, 'That page could not be found. Please try again.')
    .set(INTERNAL_ERROR, 'Something went wrong. Please try again.');

const MagentoRoute = () => {
    const magentoRouteProps = {};
    // If we have a specific store view code configured pass it into the url resolver
    if (STORE_VIEW_CODE) {
        magentoRouteProps.store = STORE_VIEW_CODE;
    }
    const talonProps = useMagentoRoute(magentoRouteProps);
    const {
        component: RootComponent,
        id,
        isLoading,
        isRedirect,
        routeError
    } = talonProps;

    if (isLoading || isRedirect) {
        return fullPageLoadingIndicator;
    } else if (RootComponent) {
        return <RootComponent id={id} />;
    } else if (routeError === NOT_FOUND) {
        // we assume it's an AEM route

        return <AemRoute />;
    }

    return (
        <ErrorView>
            <h1>{MESSAGES.get(INTERNAL_ERROR)}</h1>
        </ErrorView>
    );
};

export default MagentoRoute;
