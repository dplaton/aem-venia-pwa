/*******************************************************************************
 *
 *    Copyright 2019 Adobe. All rights reserved.
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
package com.adobe.venia.core.models.commerce;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;

import com.adobe.cq.commerce.core.components.models.common.Price;
import com.adobe.cq.commerce.core.components.models.retriever.AbstractProductRetriever;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class,
    adapters = { MyProductTeaser.class, ComponentExporter.class },
    resourceType = MyProductTeaserImpl.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION)

public class MyProductTeaserImpl implements MyProductTeaser {

    protected static final String RESOURCE_TYPE = "venia/components/commerce/productteaser";

    @ScriptVariable
    private ValueMap properties;
    @Inject
    private Resource resource;
    @PostConstruct
    public void initModel() {

    }

    @Override
    public Boolean isShowBadge() {
        return true;
    }

    @Override
    public String getFormattedPrice() {
        return "";
    }

    @Override
    public Price getPriceRange() {
        return null ;
    }

    @Override
    public String getImage() {
        return "";
    }

    @Override
    public String getName() {
        return "";
    }

    @Override
    public String getUrl() {
        return "";
    }

    @Override
    public String getSku() {
        String selection = properties.get("selection", "");
        return StringUtils.substringBefore(selection, "#");
    }

    @Override
    public String getCtaText() {
        return properties.get("ctaText", "");
    }

    @Override
    public String getCallToAction() {
        return properties.get("cta", "");
    }

    @Override
    public Boolean isVirtualProduct() {
        return false;
    }

    @Override
    public AbstractProductRetriever getProductRetriever() {
        return null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }
}
