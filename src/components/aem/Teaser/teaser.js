import React from 'react';
import { oneOf, string } from 'prop-types';
import { useApolloClient, useQuery, gql } from '@apollo/client';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Button from '@magento/venia-ui/lib/components/Button';
import Image from '@magento/venia-ui/lib/components/Image';
import classes from './teaser.css';
import getProductBySku from './getProductsBySku.graphql';

export const TeaserEditConfig = {
    emptyLabel: 'ProductTeaser',
    isEmpty: props => {
        return !props || !props.sku;
    },
    resourceType: 'venia/components/commerce/productteaser'
};

const Teaser = ({ selection: sku, cta, ctaText }) => {
    console.log(`Got sku ${sku} from model`);
    const theClient = useApolloClient();

    const { data, loading, error, networkStatus } = useQuery(
        getProductBySku,
        {
            variables: { sku }
        },
        {
            fetchPolicy: 'network-only',
            notifyOnNetworkStatusChange: true,
            client: theClient
        }
    );

    console.log(`Network status from query ${networkStatus}`);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        console.log(error);
    }
    console.log(data);

    if (data.products.items.length < 0) {
        return <p>No data received from Magento</p>;
    }

    // const data = {
    //     products: {
    //         items: [
    //             {
    //                 sku: 'WH01',
    //                 name: 'Mona Pullover Hoodlie',
    //                 price_range: {
    //                     minimum_price: {
    //                         final_price: {
    //                             value: 57,
    //                             currency: 'USD'
    //                         }
    //                     },
    //                     maximum_price: {
    //                         final_price: {
    //                             value: 57,
    //                             currency: 'USD'
    //                         }
    //                     }
    //                 },
    //                 media_gallery: [
    //                     {
    //                         url:
    //                             'http://magento2.vagrant122/pub/media/catalog/product/cache/845ad571ab8a8e47e8998fe862c6dfe2/w/h/wh01-green_main_2.jpg'
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // };

    const { items } = data.products;

    if (items.length < 1) {
        return <LoadingIndicator />;
    }

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
            <a className={classes.name} href={'#'}>
                <span>{items[0].name}</span>
            </a>
            <div className={classes.price}>
                {`From ${currency} ${minAmount}`}
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
    selection: string.isRequired,
    cta: oneOf(['add-to-cart', 'details', '']).isRequired,
    ctaText: string.isRequired
};

export default Teaser;
