import React from 'react';
import { oneOf, string } from 'prop-types';
import { useQuery } from '@apollo/client';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Button from '@magento/venia-ui/lib/components/Button';
import Image from '@magento/venia-ui/lib/components/Image';
import classes from './teaser.css';
import getProductBySku from './getProductsBySku.graphql';

export const TeaserEditConfig = {
    emptyLabel: 'ProductTeaser',
    isEmpty: props => {
        return !props || !props.sku || props.sku.length === 0;
    },
    resourceType: 'venia/components/commerce/productteaser'
};

const Teaser = ({ sku, cta, ctaText }) => {
    console.log(`Got sku ${sku}, retrieving product`);

    const { data, loading, error } = useQuery(getProductBySku, {
        variables: { sku }
    });

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        console.error(error);
    }

    if (data.products.items.length === 0) {
        return <p>No data received from Magento</p>;
    }

    const { items } = data.products;
    const { name, media_gallery, price_range } = items[0];
    const {
        maximum_price: {
            final_price: { value: maxAmount, currency }
        },
        minimum_price: {
            final_price: { value: minAmount }
        }
    } = price_range;

    const addToCartHandler = () => {
        console.log(`Add to cart`);
    };

    const moreDetailsHandler = () => {
        console.log(`More details`);
    };
    let handler;
    if (cta === 'add-to-cart') {
        handler = addToCartHandler;
    } else if (cta === 'details') {
        handler = moreDetailsHandler;
    }

    return (
        <div className={classes.root}>
            <div className={classes.badge}>
                <span>{'New'}</span>
            </div>
            <Image classes={classes} src={media_gallery[0].url} alt={name} />
            <span>{items[0].name}</span>
            <div className={classes.price}>
                {`From ${currency} ${minAmount} to ${currency} ${maxAmount}`}
            </div>
            <div className={classes.cta}>
                <Button priority={'high'} onClick={handler}>
                    {ctaText}
                </Button>
            </div>
        </div>
    );
};

Teaser.propTypes = {
    sku: string.isRequired,
    cta: oneOf(['add-to-cart', 'details', '']).isRequired,
    ctaText: string.isRequired
};

export default Teaser;
