import Button from '@magento/venia-ui/lib/components/Button';
import Image from '@magento/venia-ui/lib/components/Image';
import React from 'react';
import classes from './teaser.css';

import teaserQuery from './teaserQuery.graphql';

export const TeaserEditConfig = {
    emptyLabel: 'ProductTeaser',
    isEmpty: props => {
        return !props || !props.sku;
    },
    aemResourceType: 'venia/components/commerce/productteaser'
};

const Teaser = ({ sku }) => {
    console.log(`Got sku ${sku} from model`);
    const { data, loading } = useQuery(teaserQuery, { variables: { sku } });

    return (
        <div className={classes.root}>
            <div className={classes.badge}>
                <span>{'New'}</span>
            </div>
            <a className={classes.images} href={'#'}>
                <Image src={''} alt={'This is an image'} />
            </a>
            <a className={classes.name} href={'#'}>
                <span>{'product_name'}</span>
            </a>
            <div className={classes.cta}>
                <Button
                    onClick={() => {
                        console.log(`Clicked!`);
                    }}
                >
                    CTA Text
                </Button>
                <Button
                    onClick={() => {
                        console.log(`Moar details!`);
                    }}
                >
                    MORE DETAILS
                </Button>
            </div>
        </div>
    );
};

export default Teaser;
