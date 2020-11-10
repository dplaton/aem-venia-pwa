import React from 'react';
import { Page, MapTo, withMappable } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from '../aem/Text';
import Teaser from '../aem/Teaser';

const AemPage = props => {
    return <Page {...props} />;
};

export default withMappable(AemPage);
MapTo('venia/components/commerce/productteaser')(Teaser);
MapTo('venia/components/text')(Text, TextEditConfig);
