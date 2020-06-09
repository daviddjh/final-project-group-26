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
    + container.escapeExpression((lookupProperty(helpers,"convertTag")||(depth0 && lookupProperty(depth0,"convertTag"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"convertTag","hash":{},"data":data,"loc":{"start":{"line":12,"column":5},"end":{"line":12,"column":24}}}))
    + "\n				</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"question\">\n		<div class=\"question-icon tag_gaming\">\n			<p>?</p>\n		</div>\n		<div class=\"question-content\">\n			<p class=\"question-text\">\n				"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":12}}}) : helper)))
    + "\n			</p>\n			<p class=\"tags\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"page") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "			</p>\n			\n		</div>\n	</article>";
},"useData":true});
})();