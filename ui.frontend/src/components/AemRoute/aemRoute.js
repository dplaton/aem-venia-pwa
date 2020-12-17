import React from 'react';
import { useLocation } from 'react-router-dom';
import AemPage from '../AemPage';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import { AemClient } from './AemClient';

const AemRoute = () => {
    //TODO get the page from the location?
    //TODO error cases
    const { pathname } = useLocation();
    console.log(`Requested path name ${pathname}`);
    const modelClient = new AemClient(AEM_URL);
    ModelManager.initializeAsync({
        modelClient
    });

    return <AemPage pagePath="/content/venia/us/en/home" />;
};

export default AemRoute;
