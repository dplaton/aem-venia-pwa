import React from 'react';
import classes from './text.css';
export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        return !props || !props.text || !props.text.trim().length < 1;
    },
    aemResourceType: 'venia/components/text'
};

const Text = props => {
    const { cqPath, richText, text } = props;

    const richTextContent = () => (
        <div
            className={classes.aemText}
            id={cqPath.substr(cqPath.lastIndexOf('/') + 1)}
            data-rte-editElement
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
