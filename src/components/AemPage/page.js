import React from 'react';
import { Page, MapTo, withModel } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from '../aem/Text';
import Teaser from '../aem/Teaser';

const AemPage = props => {
    return <Page {...props} />;
};

export default withModel(AemPage, { injectPropsOnInit: true });
MapTo('venia/components/commerce/productteaser')(Teaser);
MapTo('venia/components/text')(Text, TextEditConfig);
