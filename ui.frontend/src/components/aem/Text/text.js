import React from 'react';

import classes from './text.css';

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        console.log(`Is the text component empty? `, props);
        return !props || !props.text || props.text.trim().length < 1;
    },
    resourceType: 'venia/components/text'
};

const Text = props => {
    const { cqPath, richText, text } = props;
    console.log(`Rendering the text component, path is `, cqPath);
    const id = cqPath ? cqPath.substr(cqPath.lastIndexOf('/') + 1) : '';
    const richTextContent = () => (
        <div
            className={classes.aemText}
            id={id}
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
export default Text;
