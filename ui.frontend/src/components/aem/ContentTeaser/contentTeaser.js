import { string } from 'prop-types';
import React from 'react';

import ActionItem from './actionItem';
import classes from './contentTeaser.css';

const ContentTeaser = props => {
    const {
        description,
        title,
        actionsEnabled,
        imageResource,
        actions
    } = props;

    const { fileReference } = imageResource;

    return (
        <div className="teaser">
            <div id="teaser" className="cmp-teaser">
                <div className={classes.image}>
                    <div className="cmp-image">
                        <img
                            src={`${AEM_URL}/${fileReference}`}
                            className={classes.image}
                            itemProp="contentUrl"
                            data-cmp-hook-image="image"
                            alt={title}
                            title={title}
                        />
                    </div>
                </div>
                <div className={classes.content}>
                    <h2 className={classes.title}>{title}</h2>
                    <div className={classes.description}>
                        <p>{description}</p>
                    </div>
                    {actionsEnabled &&
                        actions.map(action => {
                            return (
                                <ActionItem key={action.title} {...action} />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

ContentTeaser.propTypes = {
    description: string,
    title: string
};

export default ContentTeaser;
