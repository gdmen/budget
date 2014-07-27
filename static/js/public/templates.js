(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['entry/judo/single'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n      <div class=\"medium-10 large-8 columns\">\n        <div class=\"module-section drill\">\n          <div class=\"section-header\">\n            <h3 class=\"list-title\">Drills</h3>\n          </div>\n          <ul class=\"model-list row\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.drills), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n          </ul>\n        </div>\n      </div>\n    ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n              <li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "model-entry columns\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n              </li>\n            ";
},"3":function(depth0,helpers,partials,data) {
  return "has-title ";
  },"5":function(depth0,helpers,partials,data) {
  return "has-body ";
  },"7":function(depth0,helpers,partials,data) {
  return "\n                  <div class=\"model-body-cap\"></div>\n                ";
  },"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n                  <div class=\"model-header\">\n                    <div class=\"model-title\">\n                      "
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                  </div>\n                ";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", buffer = "\n                  <div class=\"model-body\">\n                    ";
  stack1 = ((helper = helpers.compiled_details || (depth0 && depth0.compiled_details)),(typeof helper === functionType ? helper.call(depth0, {"name":"compiled_details","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n                  </div>\n                ";
},"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n      <div class=\"medium-10 large-8 columns\">\n        <div class=\"module-section sparring\">\n          <div class=\"section-header\">\n            <h3 class=\"list-title\">Sparring</h3>\n          </div>\n          <ul class=\"model-list row\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sparring), {"name":"each","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n          </ul>\n        </div>\n      </div>\n    ";
},"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n              <li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.partner), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "model-entry columns\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.partner), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n              </li>\n            ";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n                  <div class=\"model-header\">\n                    <div class=\"model-title\">\n                      "
    + escapeExpression(((helper = helpers.partner || (depth0 && depth0.partner)),(typeof helper === functionType ? helper.call(depth0, {"name":"partner","hash":{},"data":data}) : helper)))
    + " ("
    + escapeExpression(((helper = helpers.minutes || (depth0 && depth0.minutes)),(typeof helper === functionType ? helper.call(depth0, {"name":"minutes","hash":{},"data":data}) : helper)))
    + " minutes)\n                    </div>\n                  </div>\n                ";
},"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n      <div class=\"medium-10 large-8 columns end\">\n        <div class=\"module-section note\">\n          <div class=\"section-header\">\n            <h3 class=\"list-title\">Notes</h3>\n          </div>\n          <ul class=\"model-list row\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.notes), {"name":"each","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n          </ul>\n        </div>\n      </div>\n    ";
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n              <li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "model-entry columns\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n              </li>\n            ";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n                  <div class=\"model-header\">\n                    <div class=\"model-title\">\n                      "
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                  </div>\n                ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n<div class=\"entry public\">\n\n  <div class=\"row\">\n    <div class=\"columns entry-header\">\n      <div class=\"entry-header-left\">\n        <div class=\"date\">\n          <h6 class=\"month\">February</h6>\n          <span class=\"day\">14</span>\n          <span class=\"year\">2014</span>\n        </div>\n      </div>\n      \n      <div id=\"entry-rating\">\n        ";
  stack1 = this.invokePartial(partials['partials/rating'], 'partials/rating', depth0, undefined, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      \n      <div class=\"entry-header-row\">\n        <h1 id=\"art\" class=\"headertext\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.art)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n        <h1 id=\"type\" class=\"headertext\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n      </div>\n      \n      <div class=\"entry-header-section\">\n      \n        <div class=\"entry-header-row\">\n          <h5 id=\"location\" class=\"headertext\">\n            <a href=\""
    + escapeExpression(((helper = helpers.profileLink || (depth0 && depth0.profileLink)),(typeof helper === functionType ? helper.call(depth0, {"name":"profileLink","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> @ "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n        </div>\n        \n        <div class=\"entry-header-row\">\n          <h5 id=\"date\" class=\"headertext\">\n            "
    + escapeExpression(((helper = helpers.displayDate || (depth0 && depth0.displayDate)),(typeof helper === functionType ? helper.call(depth0, {"name":"displayDate","hash":{},"data":data}) : helper)))
    + " ("
    + escapeExpression(((helper = helpers.displayDuration || (depth0 && depth0.displayDuration)),(typeof helper === functionType ? helper.call(depth0, {"name":"displayDuration","hash":{},"data":data}) : helper)))
    + ")\n          </h5>\n        </div>\n        \n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.drills), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sparring), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notes), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    \n  </div>\n</div>";
},"usePartial":true,"useData":true});
templates['pages/home'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\n\n<div class=\"row\">\n  <div class=\"columns\">\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.newEntry)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"button radius success tiny\">\n      <i class=\"fa fa-file\"></i> New Entry\n    </a>\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"button radius success tiny\">\n      <i class=\"fa fa-user\"></i> Profile\n    </a>\n  </div>\n</div>";
},"useData":true});
templates['pages/profile'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n            <li>\n              <div class=\"entry-right\">\n                <a class=\"button secondary tiny\" href=\""
    + escapeExpression(((helper = helpers.link || (depth0 && depth0.link)),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">view</a>\n              </div>\n              <h2 class=\"title entry-left\">";
  stack1 = this.invokePartial(partials['partials/rating'], 'partials/rating', depth0, undefined, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.art)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n              <div class=\"date entry-left\">"
    + escapeExpression(((helper = helpers.date || (depth0 && depth0.date)),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n            </li>\n          ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n<div class=\"row profile public\">\n  <div class=\"medium-11 large-8 large-centered columns\">\n    <div class=\"row\">\n      <div class=\"medium-3 columns profile-header\">\n      \n        <div class=\"row\">\n        \n          <div class=\"small-6 medium-12 columns\">\n            <div class=\"profile-badge\">\n              <div class=\"square-dummy\"></div>\n              <div class=\"profile-badge-padding\">\n                <div class=\"image\"><img src=\"/static/img/profile.png\"></div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"small-6 medium-12 columns\">\n            <div class=\"profile-meta\">\n              <h5 class=\"username\">\n                "
    + escapeExpression(((helper = helpers.username || (depth0 && depth0.username)),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\n              </h5>\n              <a href=\"data:application/octet-stream,"
    + escapeExpression(((helper = helpers.exportContent || (depth0 && depth0.exportContent)),(typeof helper === functionType ? helper.call(depth0, {"name":"exportContent","hash":{},"data":data}) : helper)))
    + "\" download=\""
    + escapeExpression(((helper = helpers.exportName || (depth0 && depth0.exportName)),(typeof helper === functionType ? helper.call(depth0, {"name":"exportName","hash":{},"data":data}) : helper)))
    + "\">Export JSON</a>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n\n      <div class=\"medium-9 columns profile-feed\">\n        <ul class=\"entry-list\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.entries), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        </ul>\n      </div>\n      \n    </div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});
templates['partials/rating'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n<div class=\"rating\">\n  <img src=\"/static/img/rating-"
    + escapeExpression(((helper = helpers.rating || (depth0 && depth0.rating)),(typeof helper === functionType ? helper.call(depth0, {"name":"rating","hash":{},"data":data}) : helper)))
    + ".png\">\n</div>";
},"useData":true});
})();