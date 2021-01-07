/*******************************************************************************
 *
 *    Copyright 2020 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/
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
