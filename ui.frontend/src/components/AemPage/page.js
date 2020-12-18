import React from 'react';
import {
    Page,
    MapTo,
    withMappable,
    ResponsiveGrid
} from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from '../aem/Text';
import ProductTeaser, { ProductTeaserEditConfig } from '../aem/ProductTeaser';
import ContentTeaser from '../aem/ContentTeaser';
const AemPage = props => {
    return <Page {...props} />;
};

export default withMappable(AemPage);

MapTo('venia/components/commerce/productteaser')(
    ProductTeaser,
    ProductTeaserEditConfig
);
MapTo('venia/components/text')(Text, TextEditConfig);
MapTo('venia/components/container')(ResponsiveGrid, {
    emptyLabel: 'Container',
    isEmpty: props => {
        return props.cqItemsOrder && props.cqItemsOrder.length > 0;
    },
    resourceType: 'venia/components/container'
});
MapTo('venia/components/commerce/teaser')(ContentTeaser);
