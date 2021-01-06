import React from 'react';
import AemPage from '../AemPage';
import { useLocation } from 'react-router-dom';
const AemRoute = () => {
    //TODO error cases
    const { pathname } = useLocation();

    return <AemPage pagePath={pathname.slice(0, pathname.indexOf('.'))} />;
};

export default AemRoute;
