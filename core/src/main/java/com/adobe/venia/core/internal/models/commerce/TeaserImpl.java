package com.adobe.venia.core.internal.models.commerce;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;

import com.adobe.cq.commerce.core.components.models.teaser.CommerceTeaser;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.venia.core.models.commerce.Teaser;
import com.day.cq.commons.Externalizer;

@Model(adaptables = SlingHttpServletRequest.class,
    adapters = { Teaser.class, ComponentExporter.class },
    resourceType = TeaserImpl.RESOURCE_TYPE)

@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TeaserImpl implements Teaser {

    static final String RESOURCE_TYPE = "venia/components/commerce/teaser";

    @Self
    SlingHttpServletRequest request;

    @ScriptVariable
    private ValueMap properties;

    @Inject
    private Resource resource;

    @Inject
    private Externalizer externalizer;

    @Override
    public String getImageUrl() {
        String fileReference = properties.get("fileReference", "");

        return StringUtils.isNotEmpty(fileReference) ?
            externalizer.externalLink(request.getResourceResolver(), Externalizer.AUTHOR, request.getScheme(), fileReference) :
            "";
    }

    @Override
    public String getTitle() {
        return properties.get("jcr:title", "");
    }

    @Override
    public String getDescription() {
        return properties.get("jcr:description", "");
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}