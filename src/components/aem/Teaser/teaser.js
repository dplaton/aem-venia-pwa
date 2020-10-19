import Button from '@magento/venia-ui/lib/components/Button';
import Image from '@magento/venia-ui/lib/components/Image';
import React from 'react';
import classes from './teaser.css';
import { useQuery } from '@apollo/client';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

import { gql } from '@apollo/client';

const getProductBySku = gql`
    query getProducts($sku: String!) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                sku
                name
                media_gallery {
                    url
                }
            }
        }
    }
`;

export const TeaserEditConfig = {
    emptyLabel: 'ProductTeaser',
    isEmpty: props => {
        return !props || !props.sku;
    },
    aemResourceType: 'venia/components/commerce/productteaser'
};

const Teaser = ({ sku }) => {
    console.log(`Got sku ${sku} from model`);
    const { data, loading, error } = useQuery(getProductBySku, {
        variables: { sku }
    });

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        console.log(error);
    }

    if (data.products.items.length < 1) {
        console.log(`No data`);
        return <p>No data</p>;
    }

    console.log(data);

    return (
        <div className={classes.root}>
            <div className={classes.badge}>
                <span>{'New'}</span>
            </div>
            <a className={classes.images} href={'#'}>
                <Image
                    src={data.products.items[0]['media_gallery'].url[0]}
                    alt={'This is an image'}
                />
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
