import { string } from 'prop-types';
import React from 'react';

import classes from './contentTeaser.css';

const ContentTeaser = ({ description, title }) => {
    return (
        <div className="teaser">
            <div id="teaser-ce1681cc6a" className="cmp-teaser">
                <div className="cmp-teaser__image">
                    <div
                        data-cmp-src={`${AEM_URL}/content/core-components-examples/library/teaser/_jcr_content/root/responsivegrid/demo_1789748122/component/teaser.coreimg{.width}.jpeg/1608127618333/lava-rock-formation.jpeg`}
                        data-asset="/content/dam/core-components-examples/library/sample-assets/lava-rock-formation.jpg"
                        data-asset-id="c58c09f6-e382-4698-bfbd-e8c8d37712c8"
                        data-title="Gray lava rock formation"
                        id="image-ce1681cc6a"
                        className="cmp-image"
                        itemScope=""
                        itemType="http://schema.org/ImageObject"
                    >
                        <a
                            className="cmp-image__link"
                            href="/content/core-components-examples/library/teaser.html"
                            data-cmp-hook-image="link"
                        >
                            <img
                                src={`https://publish-p8003-e37513.adobeaemcloud.com/us/en/_jcr_content/root/container/container/teaser.coreimg.85.1600.jpeg/1600687759008/venia-hero1.jpeg`}
                                className={classes.image}
                                itemProp="contentUrl"
                                data-cmp-hook-image="image"
                                alt="Gray lava rock formation"
                                title="Gray lava rock formation"
                            />
                        </a>
                        <meta
                            itemProp="caption"
                            content="Gray lava rock formation"
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
