import { string } from 'prop-types';
import React from 'react';

import classes from './contentTeaser.css';

const ContentTeaser = props => {
    console.log(`Got props `, props);
    const { description, title, imageUrl, actionsEnabled } = props;
    return (
        <div className="teaser">
            <div id="teaser-ce1681cc6a" className="cmp-teaser">
                <div className={classes.image}>
                    <div
                        id="image-ce1681cc6a"
                        className="cmp-image"
                        itemScope=""
                        itemType="http://schema.org/ImageObject"
                    >
                        <img
                            src={imageUrl}
                            className={classes.image}
                            itemProp="contentUrl"
                            data-cmp-hook-image="image"
                            alt={title}
                            title={title}
                        />
                    </div>
                </div>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        <a
                            className="cmp-teaser__title-link"
                            href="/content/core-components-examples/library/teaser.html"
                        >
                            {title}
                        </a>
                    </h2>
                    <div className={classes.description}>
                        <p>{description}</p>
                    </div>
                    {actionsEnabled && (
                        <a
                            className={classes.actionLink}
                            href="http://google.com"
                            data-cmp-clickable=""
                        >
                            TODO change me
                        </a>
                    )}
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
