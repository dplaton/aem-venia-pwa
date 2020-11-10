/*******************************************************************************
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 ******************************************************************************/
package org.apache.sling.scripting.sightly.apps.venia.components.commerce.productteaser;

import java.io.PrintWriter;
import java.util.Collection;
import javax.script.Bindings;

import org.apache.sling.scripting.sightly.render.RenderUnit;
import org.apache.sling.scripting.sightly.render.RenderContext;

public final class productteaser_html extends RenderUnit {

    @Override
    protected final void render(PrintWriter out,
                                Bindings bindings,
                                Bindings arguments,
                                RenderContext renderContext) {
// Main Template Body -----------------------------------------------------------------------------

Object _global_clientlib = null;
Object _global_product = null;
Object _global_templates = null;
Object _global_actionstpl = null;
Object _dynamic_properties = bindings.get("properties");
Object _global_isconfigured = null;
Object _global_hasproduct = null;
Object _global_template = null;
out.write("\n\n");
_global_clientlib = renderContext.call("use", "/libs/granite/sightly/templates/clientlib.html", obj());
_global_product = renderContext.call("use", com.adobe.venia.core.models.commerce.MyProductTeaser.class.getName(), obj());
_global_templates = renderContext.call("use", "core/wcm/components/commons/v1/templates.html", obj());
_global_actionstpl = renderContext.call("use", "actions.html", obj());
_global_isconfigured = renderContext.getObjectModel().resolveProperty(_dynamic_properties, "selection");
if (renderContext.getObjectModel().toBoolean(_global_isconfigured)) {
_global_hasproduct = renderContext.getObjectModel().resolveProperty(_global_product, "url");
    if (renderContext.getObjectModel().toBoolean(_global_hasproduct)) {
        out.write("\n    ");
        {
            Object var_templatevar0 = renderContext.getObjectModel().resolveProperty(_global_clientlib, "all");
            {
                String var_templateoptions1_field$_categories = "core.cif.components.productteaser.v1";
                {
                    java.util.Map var_templateoptions1 = obj().with("categories", var_templateoptions1_field$_categories);
                    callUnit(out, renderContext, var_templatevar0, var_templateoptions1);
                }
            }
        }
        out.write("\n\n    ");
        {
            Object var_testvariable2 = ((renderContext.getObjectModel().toBoolean(_global_isconfigured) ? _global_hasproduct : _global_isconfigured));
            if (renderContext.getObjectModel().toBoolean(var_testvariable2)) {
                out.write("<div class=\"item__root\" data-cmp-is=\"productteaser\"");
                {
                    Object var_attrvalue3 = renderContext.getObjectModel().resolveProperty(_global_product, "virtualProduct");
                    {
                        Object var_attrcontent4 = renderContext.call("xss", var_attrvalue3, "attribute");
                        {
                            Object var_shoulddisplayattr6 = ((renderContext.getObjectModel().toBoolean(var_attrcontent4) ? var_attrcontent4 : ("false".equals(var_attrvalue3))));
                            if (renderContext.getObjectModel().toBoolean(var_shoulddisplayattr6)) {
                                out.write(" data-virtual");
                                {
                                    boolean var_istrueattr5 = (var_attrvalue3.equals(true));
                                    if (!var_istrueattr5) {
                                        out.write("=\"");
                                        out.write(renderContext.getObjectModel().toString(var_attrcontent4));
                                        out.write("\"");
                                    }
                                }
                            }
                        }
                    }
                }
                out.write(">\n        ");
                {
                    Object var_testvariable7 = renderContext.getObjectModel().resolveProperty(_global_product, "showBadge");
                    if (renderContext.getObjectModel().toBoolean(var_testvariable7)) {
                        out.write("<div class=\"item__badge\">\n            <span>");
                        {
                            Object var_8 = renderContext.call("xss", ((renderContext.getObjectModel().toBoolean(renderContext.getObjectModel().resolveProperty(_dynamic_properties, "text")) ? renderContext.getObjectModel().resolveProperty(_dynamic_properties, "text") : "New")), "text");
                            out.write(renderContext.getObjectModel().toString(var_8));
                        }
                        out.write("</span>\n        </div>");
                    }
                }
                out.write("\n        <a class=\"item__images\"");
                {
                    Object var_attrvalue9 = renderContext.getObjectModel().resolveProperty(_global_product, "url");
                    {
                        Object var_attrcontent10 = renderContext.call("xss", var_attrvalue9, "uri");
                        {
                            Object var_shoulddisplayattr12 = ((renderContext.getObjectModel().toBoolean(var_attrcontent10) ? var_attrcontent10 : ("false".equals(var_attrvalue9))));
                            if (renderContext.getObjectModel().toBoolean(var_shoulddisplayattr12)) {
                                out.write(" href");
                                {
                                    boolean var_istrueattr11 = (var_attrvalue9.equals(true));
                                    if (!var_istrueattr11) {
                                        out.write("=\"");
                                        out.write(renderContext.getObjectModel().toString(var_attrcontent10));
                                        out.write("\"");
                                    }
                                }
                            }
                        }
                    }
                }
                out.write(">\n            <img class=\"item__image\" width=\"100%\" height=\"100%\"");
                {
                    Object var_attrvalue13 = renderContext.getObjectModel().resolveProperty(_global_product, "image");
                    {
                        Object var_attrcontent14 = renderContext.call("xss", var_attrvalue13, "uri");
                        {
                            Object var_shoulddisplayattr16 = ((renderContext.getObjectModel().toBoolean(var_attrcontent14) ? var_attrcontent14 : ("false".equals(var_attrvalue13))));
                            if (renderContext.getObjectModel().toBoolean(var_shoulddisplayattr16)) {
                                out.write(" src");
                                {
                                    boolean var_istrueattr15 = (var_attrvalue13.equals(true));
                                    if (!var_istrueattr15) {
                                        out.write("=\"");
                                        out.write(renderContext.getObjectModel().toString(var_attrcontent14));
                                        out.write("\"");
                                    }
                                }
                            }
                        }
                    }
                }
                {
                    Object var_attrvalue17 = renderContext.getObjectModel().resolveProperty(_global_product, "image");
                    {
                        Object var_attrcontent18 = renderContext.call("xss", var_attrvalue17, "attribute");
                        {
                            Object var_shoulddisplayattr20 = ((renderContext.getObjectModel().toBoolean(var_attrcontent18) ? var_attrcontent18 : ("false".equals(var_attrvalue17))));
                            if (renderContext.getObjectModel().toBoolean(var_shoulddisplayattr20)) {
                                out.write(" alt");
                                {
                                    boolean var_istrueattr19 = (var_attrvalue17.equals(true));
                                    if (!var_istrueattr19) {
                                        out.write("=\"");
                                        out.write(renderContext.getObjectModel().toString(var_attrcontent18));
                                        out.write("\"");
                                    }
                                }
                            }
                        }
                    }
                }
                out.write("/>\n        </a>\n        <a class=\"item__name\"");
                {
                    Object var_attrvalue21 = renderContext.getObjectModel().resolveProperty(_global_product, "url");
                    {
                        Object var_attrcontent22 = renderContext.call("xss", var_attrvalue21, "uri");
                        {
                            Object var_shoulddisplayattr24 = ((renderContext.getObjectModel().toBoolean(var_attrcontent22) ? var_attrcontent22 : ("false".equals(var_attrvalue21))));
                            if (renderContext.getObjectModel().toBoolean(var_shoulddisplayattr24)) {
                                out.write(" href");
                                {
                                    boolean var_istrueattr23 = (var_attrvalue21.equals(true));
                                    if (!var_istrueattr23) {
                                        out.write("=\"");
                                        out.write(renderContext.getObjectModel().toString(var_attrcontent22));
                                        out.write("\"");
                                    }
                                }
                            }
                        }
                    }
                }
                out.write("><span>");
                {
                    Object var_25 = renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_global_product, "name"), "text");
                    out.write(renderContext.getObjectModel().toString(var_25));
                }
                out.write("</span></a>\n        ");
_global_template = renderContext.call("use", "core/cif/components/commons/v1/price.html", obj());
                {
                    Object var_templatevar26 = renderContext.getObjectModel().resolveProperty(_global_template, "price");
                    {
                        Object var_templateoptions27_field$_pricerange = renderContext.getObjectModel().resolveProperty(_global_product, "priceRange");
                        {
                            boolean var_templateoptions27_field$_displayyousave = false;
                            {
                                java.util.Map var_templateoptions27 = obj().with("priceRange", var_templateoptions27_field$_pricerange).with("displayYouSave", var_templateoptions27_field$_displayyousave);
                                callUnit(out, renderContext, var_templatevar26, var_templateoptions27);
                            }
                        }
                    }
                }
                out.write("\n        ");
                {
                    Object var_templatevar28 = renderContext.getObjectModel().resolveProperty(_global_actionstpl, "actions");
                    {
                        Object var_templateoptions29_field$_product = _global_product;
                        {
                            java.util.Map var_templateoptions29 = obj().with("product", var_templateoptions29_field$_product);
                            callUnit(out, renderContext, var_templatevar28, var_templateoptions29);
                        }
                    }
                }
                out.write("\n    </div>");
            }
        }
        out.write("\n");
    }
}
out.write("\n\n");
{
    Object var_templatevar30 = renderContext.getObjectModel().resolveProperty(_global_templates, "placeholder");
    {
        boolean var_templateoptions31_field$_isempty = (!renderContext.getObjectModel().toBoolean(_global_isconfigured));
        {
            java.util.Map var_templateoptions31 = obj().with("isEmpty", var_templateoptions31_field$_isempty);
            callUnit(out, renderContext, var_templatevar30, var_templateoptions31);
        }
    }
}
out.write("\n");
{
    Object var_templatevar32 = renderContext.getObjectModel().resolveProperty(_global_templates, "placeholder");
    {
        Object var_templateoptions33_field$_isempty = ((renderContext.getObjectModel().toBoolean(_global_isconfigured) ? (!renderContext.getObjectModel().toBoolean(_global_hasproduct)) : _global_isconfigured));
        {
            String var_templateoptions33_field$_emptytextappend = "Configured, but no product to display";
            {
                java.util.Map var_templateoptions33 = obj().with("isEmpty", var_templateoptions33_field$_isempty).with("emptyTextAppend", var_templateoptions33_field$_emptytextappend);
                callUnit(out, renderContext, var_templatevar32, var_templateoptions33);
            }
        }
    }
}
out.write("\n");


// End Of Main Template Body ----------------------------------------------------------------------
    }



    {
//Sub-Templates Initialization --------------------------------------------------------------------



//End of Sub-Templates Initialization -------------------------------------------------------------
    }

}

