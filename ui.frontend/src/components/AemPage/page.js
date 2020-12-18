import React from 'react';
import {
    Page,
    MapTo,
    withMappable,
    ResponsiveGrid
} from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from '../aem/Text';
import Teaser, { TeaserEditConfig } from '../aem/Teaser';

const AemPage = props => {
    return <Page {...props} />;
};

export default withMappable(AemPage);

MapTo('venia/components/commerce/productteaser')(Teaser, TeaserEditConfig);
MapTo('venia/components/text')(Text, TextEditConfig);
MapTo('venia/components/container')(ResponsiveGrid, {
    emptyLabel: 'Container',
    isEmpty: props => {
        return props.cqItemsOrder && props.cqItemsOrder.length > 0;
    },
    resourceType: 'venia/components/container'
});
