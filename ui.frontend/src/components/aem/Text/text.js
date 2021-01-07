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
import React from 'react';

import classes from './text.css';

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
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
