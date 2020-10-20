import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { oneOf, string } from 'prop-types';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Button from '@magento/venia-ui/lib/components/Button';
import Image from '@magento/venia-ui/lib/components/Image';
import classes from './teaser.css';

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

const Teaser = ({ selection: sku, cta, ctaText }) => {
    console.log(`Got sku ${sku} from model`);
    // const { data, loading, error } = useQuery(getProductBySku, {
    //     variables: { sku }
    // });

    // if (loading) {
    //     return <LoadingIndicator />;
    // }

    // if (error) {
    //     console.log(error);
    // }

    // console.log(data);

    const data = {
        products: {
            items: [
                {
                    sku: 'WH01',
                    name: 'Mona Pullover Hoodlie',
                    price_range: {
                        minimum_price: {
                            final_price: {
                                value: 57,
                                currency: 'USD'
                            }
                        },
                        maximum_price: {
                            final_price: {
                                value: 57,
                                currency: 'USD'
                            }
                        }
                    },
                    media_gallery: [
                        {
                            url:
                                'http://magento2.vagrant122/pub/media/catalog/product/cache/845ad571ab8a8e47e8998fe862c6dfe2/w/h/wh01-green_main_2.jpg'
                        }
                    ]
                }
            ]
        }
    };

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
