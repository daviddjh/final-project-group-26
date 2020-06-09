(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<a href=\"#\">\n					"
    + container.escapeExpression((lookupProperty(helpers,"convertTag")||(depth0 && lookupProperty(depth0,"convertTag"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"convertTag","hash":{},"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":16,"column":24}}}))
    + "\n				</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"question\">\n		<div class=(concat \"question-icon tag_\" "
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"0") : stack1), depth0))
    + ")>\n			<p>?</p>\n		</div>\n		<div class=\"question-content\">\n			<p class=\"question-author\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":30},"end":{"line":6,"column":40}}}) : helper)))
    + "</p>\n			<a href=\"/"
    + alias1(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":13},"end":{"line":7,"column":20}}}) : helper)))
    + "\">\n				<p class=\"question-text\">\n					"
    + alias1(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":9,"column":14}}}) : helper)))
    + "\n				</p>\n			</a>\n\n			<div class=\"tags\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias2,(depth0 != null ? lookupProperty(depth0,"page") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n			\n		</div>\n	</article>\n";
},"useData":true});
})();