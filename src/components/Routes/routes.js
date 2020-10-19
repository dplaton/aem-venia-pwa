import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import HomePage from '@magento/venia-ui/lib/components/HomePage';
import AemRoute from '../AemRoute';

import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';
import Teaser from '../aem/Teaser';

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                <Route>
                    <AemRoute />
                    {/* <MagentoRoute /> */}
                    <Route exact path="/">
                        <Teaser sku={'WH01'} />
                        <HomePage />
                    </Route>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
