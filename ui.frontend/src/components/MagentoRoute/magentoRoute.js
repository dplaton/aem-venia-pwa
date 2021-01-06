import React from 'react';
import ErrorView from '@magento/venia-ui/lib/components/ErrorView';
import {
    INTERNAL_ERROR,
    NOT_FOUND,
    useMagentoRoute
} from '@magento/peregrine/lib/talons/MagentoRoute';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AemRoute from '../AemRoute';

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
