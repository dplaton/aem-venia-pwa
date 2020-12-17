import React, { Fragment } from 'react';
import { number, shape, string } from 'prop-types';
import GET_CMS_PAGE from '@magento/venia-ui/lib/queries/getCmsPage.graphql';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useCmsPage } from '@magento/peregrine/lib/talons/Cms/useCmsPage';
import RichContent from '@magento/venia-ui/lib/components/RichContent';
import CategoryList from '@magento/venia-ui/lib/components/CategoryList';
import { Meta, Title } from '@magento/venia-ui/lib/components/Head';
import { mergeClasses } from '@magento/venia-ui/lib/classify';

import defaultClasses from './cms.css';

const CMSPage = props => {
    console.log(`This is our own root component`);
    const { id } = props;

    const talonProps = useCmsPage({
        id,
        queries: {
            getCmsPage: GET_CMS_PAGE
        }
    });

    const { cmsPage, hasContent, shouldShowLoadingIndicator } = talonProps;

    if (shouldShowLoadingIndicator) {
        return fullPageLoadingIndicator;
    }

    const classes = mergeClasses(defaultClasses, props.classes);

    if (hasContent) {
        const {
            content_heading,
            title,
            meta_title,
            meta_description,
            content
        } = cmsPage;

        const headingElement =
            content_heading !== '' ? (
                <h1 className={classes.heading}>{content_heading}</h1>
            ) : null;

        const pageTitle = meta_title || title;

        return (
            <Fragment>
                <Title>{pageTitle}</Title>
                <Meta name="title" content={pageTitle} />
                <Meta name="description" content={meta_description} />
                {headingElement}
                <RichContent html={content} />
            </Fragment>
        );
    }

    return <CategoryList title="Shop by category" id={2} />;
};

CMSPage.propTypes = {
    id: number,
    classes: shape({
        heading: string
    })
};

export default CMSPage;
