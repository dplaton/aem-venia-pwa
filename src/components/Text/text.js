import React from 'react';
import { MapTo, withModel } from '@adobe/aem-react-editable-components';

import classes from './text.css';

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        return !props || !props.text || !props.text.trim().length < 1;
    },
    aemResourceType: 'venia/components/text'
};

const Text = props => {
    const { itemPath, richText, text } = props;

    const richTextContent = () => (
        <div
            className={classes.aemText}
            id={itemPath.substr(itemPath.lastIndexOf('/') + 1)}
            data-rte-editelement
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );

    return richText ? (
        richTextContent()
    ) : (
        <div className={classes.aemText}>{text}</div>
    );
};
MapTo('venia/components/text')(Text, TextEditConfig);
export default Text;

export const AemText = withModel(Text, { injectPropsOnInit: true });
