import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import HomePage from '@magento/venia-ui/lib/components/HomePage';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
//import AemText from '../Text/text';

import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                <Route>
                    <MagentoRoute />
                    {/* <AemText
                        pagePath={'/content/venia/us/en/home'}
                        itemPath={'root/responsivegrid/text'}
                    /> */}
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
