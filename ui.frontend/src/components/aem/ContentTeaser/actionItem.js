import React, { useEffect, useState } from 'react';
import Button from '@magento/venia-ui/lib/components/Button';
import { useLazyQuery } from '@apollo/client';
import getCategoryById from './getCategoryById.graphql';

const ActionItem = props => {
    const { title } = props;

    const [runCategoryQuery, result] = useLazyQuery(getCategoryById);
    const { data } = result;

    const [actionUrl, setActionUrl] = useState('#');

    useEffect(() => {
        if (props.categoryId) {
            runCategoryQuery({ variables: { id: props.categoryId } });
        }
    }, [props.categoryId, runCategoryQuery]);

    useEffect(() => {
        if (data && data.category) {
            const { url_path, url_suffix } = data.category;
            setActionUrl(`/${url_path}.${url_suffix}`);
        }
    }, [data]);

    useEffect(() => {
        if (props.productSlug) {
            setActionUrl(`/${props.productSlug}.html`);
        }
    }, [props.productSlug]);

    return (
        <Button
            priority="high"
            onClick={() => (window.location.href = actionUrl)}
        >
            {title}
        </Button>
    );
};

export default ActionItem;
