(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['entry/judo/single'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n<div class=\"entry private\">\n  <div class=\"row\">\n\n    <div class=\"columns\">\n    \n      <div id=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + "-save\" class=\"entry-save disabled\">\n        <i class=\"saving fa fa-spinner fa-spin\"></i>\n        <i class=\"enabled fa fa-floppy-o\"></i>\n        <i class=\"disabled fa fa-check\"></i>\n      </div>\n\n      <div id=\"entry-rating\">\n        ";
  stack1 = this.invokePartial(partials['partials/rating'], 'partials/rating', depth0, undefined, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n      </div>\n      \n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"columns entry-header\">\n    \n      <div class=\"entry-header-row\">\n        <div id=\"art\"></div>\n        <div id=\"type\"></div>\n        <div id=\"location\"></div>\n      </div>\n    \n      <div class=\"entry-header-row\">\n        <div>\n          <h3 class=\"headertext edit-link modal-trigger date-modal\">\n            <i class=\"fa fa-calendar\"></i>\n            <span class=\"display date\">"
    + escapeExpression(((helper = helpers.displayDate || (depth0 && depth0.displayDate)),(typeof helper === functionType ? helper.call(depth0, {"name":"displayDate","hash":{},"data":data}) : helper)))
    + "</span>\n          </h3>\n        </div>\n        <div>\n          <h3 class=\"plaintext\">from</h3>\n          <h3 class=\"headertext edit-link modal-trigger start-time-modal\">\n            <i class=\"fa fa-clock-o\"></i>\n            <span class=\"display start\">"
    + escapeExpression(((helper = helpers.displayStart || (depth0 && depth0.displayStart)),(typeof helper === functionType ? helper.call(depth0, {"name":"displayStart","hash":{},"data":data}) : helper)))
    + "</span>\n          </h3>\n        </div>\n        <div>\n          <h3 class=\"plaintext\">until</h3>\n          <h3 class=\"headertext edit-link modal-trigger end-time-modal\">\n            <i class=\"fa fa-clock-o\"></i>\n            <span class=\"display end\">"
    + escapeExpression(((helper = helpers.displayEnd || (depth0 && depth0.displayEnd)),(typeof helper === functionType ? helper.call(depth0, {"name":"displayEnd","hash":{},"data":data}) : helper)))
    + "</span>\n          </h3>\n        </div>\n      </div>\n      \n    </div>\n    \n  </div>\n\n  \n\n  <div class=\"row\">\n\n    <div class=\"medium-10 large-8 columns\">\n      <div id=\"drills\"></div>\n    </div>\n\n    <div class=\"medium-10 large-8 columns\">\n      <div id=\"sparring\"></div>\n    </div>\n\n    <div class=\"medium-10 large-8 columns end\">\n      <div id=\"notes\"></div>\n    </div>\n    \n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"columns\">\n    \n      <div class=\"modal-wrapper modal-centered date-modal\">\n        <div class=\"click-away-overlay\"></div>\n        <div class=\"modal\">\n          <div id=\"date\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":date\"></div>\n        </div>\n      </div>\n        \n      <div class=\"modal-wrapper modal-centered start-time-modal\">\n        <div class=\"click-away-overlay\"></div>\n        <div class=\"modal\">\n          <div id=\"start\"></div>\n        </div>\n      </div>\n\n      <div class=\"modal-wrapper modal-centered end-time-modal\">\n        <div class=\"click-away-overlay\"></div>\n        <div class=\"modal\">\n          <div id=\"end\"></div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});
templates['entry/module/drill/list'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"module-section drill\">\n  <div class=\"section-header\">\n    <div class=\"buttons\">\n      <button class=\"tiny secondary radius add-model\">add <i class=\"fa fa-plus\"></i></button>\n    </div>\n    <h3 class=\"list-title\">Drills</h3>\n  </div>\n  <ul class=\"model-list row\">\n  </ul>\n</div>";
},"useData":true});
templates['entry/module/drill/single'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n<li class=\"has-body model-entry columns\">\n  <div class=\"model-body-cap\"></div>\n  <div class=\"model-header\">\n    <div class=\"buttons\">\n      <button class=\"view tiny alert radius delete-model\">remove</button>\n      <button class=\"view tiny success radius edit-model\">edit <i class=\"fa fa-pencil\"></i ></button>\n      <button class=\"edit tiny secondary radius view-model\">close</button>\n      <div id=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + "-save\" class=\"edit save-model disabled\">\n        <i class=\"saving fa fa-spinner fa-spin\"></i>\n        <i class=\"enabled fa fa-floppy-o\"></i>\n        <i class=\"disabled fa fa-check\"></i>\n      </div>\n    </div>\n    <div class=\"model-title\">\n      <span class=\"view\">"
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n      <input class=\"edit\" type=\"text\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":name\" class=\"focus\" placeholder=\"Name\" value=\""
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\n    </div>\n  </div>\n  <div class=\"model-body\">\n    <span class=\"view\">";
  stack1 = ((helper = helpers.compiled_details || (depth0 && depth0.compiled_details)),(typeof helper === functionType ? helper.call(depth0, {"name":"compiled_details","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "</span>\n    <textarea class=\"edit\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":details\" placeholder=\"Details\">"
    + escapeExpression(((helper = helpers.details || (depth0 && depth0.details)),(typeof helper === functionType ? helper.call(depth0, {"name":"details","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n</li>";
},"useData":true});
templates['entry/module/note/list'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"module-section note\">\n  <div class=\"section-header\">\n    <div class=\"buttons\">\n      <button class=\"tiny secondary radius add-model\">add <i class=\"fa fa-plus\"></i></button>\n    </div>\n    <h3 class=\"list-title\">Notes</h3>\n  </div>\n  <ul class=\"model-list row\">\n  </ul>\n</div>";
},"useData":true});
templates['entry/module/note/single'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n<li class=\"has-body model-entry columns\">\n  <div class=\"model-body-cap\"></div>\n  <div class=\"model-header\">\n    <div class=\"buttons\">\n      <button class=\"view tiny alert radius delete-model\">remove</button>\n      <button class=\"view tiny success radius edit-model\">edit <i class=\"fa fa-pencil\"></i ></button>\n      <button class=\"edit tiny secondary radius view-model\">close</button>\n      <div id=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + "-save\" class=\"edit save-model disabled\">\n        <i class=\"saving fa fa-spinner fa-spin\"></i>\n        <i class=\"enabled fa fa-floppy-o\"></i>\n        <i class=\"disabled fa fa-check\"></i>\n      </div>\n    </div>\n    <div class=\"model-title\">\n      <span class=\"view\">"
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n      <input class=\"edit\" type=\"text\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":title\" class=\"focus\" placeholder=\"Title\" value=\""
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\n    </div>\n  </div>\n  <div class=\"model-body\">\n    <span class=\"view\">";
  stack1 = ((helper = helpers.compiled_details || (depth0 && depth0.compiled_details)),(typeof helper === functionType ? helper.call(depth0, {"name":"compiled_details","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "</span>\n    <textarea class=\"edit\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":details\" placeholder=\"Details\">"
    + escapeExpression(((helper = helpers.details || (depth0 && depth0.details)),(typeof helper === functionType ? helper.call(depth0, {"name":"details","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n</li>";
},"useData":true});
templates['entry/module/sparring/list'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"module-section sparring\">\n  <div class=\"section-header\">\n    <div class=\"buttons\">\n      <button class=\"tiny secondary radius add-model\">add <i class=\"fa fa-plus\"></i></button>\n    </div>\n    <h3 class=\"list-title\">Sparring</h3>\n  </div>\n  <ul class=\"model-list row\">\n  </ul>\n</div>";
},"useData":true});
templates['entry/module/sparring/single'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n<li class=\"has-body model-entry columns\">\n  <div class=\"model-body-cap\"></div>\n  <div class=\"model-header\">\n    <div class=\"buttons\">\n      <button class=\"view tiny alert radius delete-model\">remove</button>\n      <button class=\"view tiny success radius edit-model\">edit <i class=\"fa fa-pencil\"></i ></button>\n      <button class=\"edit tiny secondary radius view-model\">close</button>\n      <div id=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + "-save\" class=\"edit save-model disabled\">\n        <i class=\"saving fa fa-spinner fa-spin\"></i>\n        <i class=\"enabled fa fa-floppy-o\"></i>\n        <i class=\"disabled fa fa-check\"></i>\n      </div>\n    </div>\n    <div class=\"model-title\">\n      <span class=\"view\">"
    + escapeExpression(((helper = helpers.partner || (depth0 && depth0.partner)),(typeof helper === functionType ? helper.call(depth0, {"name":"partner","hash":{},"data":data}) : helper)))
    + " ("
    + escapeExpression(((helper = helpers.minutes || (depth0 && depth0.minutes)),(typeof helper === functionType ? helper.call(depth0, {"name":"minutes","hash":{},"data":data}) : helper)))
    + " minutes)</span>\n      <input class=\"edit\" type=\"text\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":partner\" class=\"focus\" placeholder=\"Partner\" value=\""
    + escapeExpression(((helper = helpers.partner || (depth0 && depth0.partner)),(typeof helper === functionType ? helper.call(depth0, {"name":"partner","hash":{},"data":data}) : helper)))
    + "\" />\n      <input class=\"edit\" type=\"number\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":minutes\" placeholder=\"Minutes\" value=\""
    + escapeExpression(((helper = helpers.minutes || (depth0 && depth0.minutes)),(typeof helper === functionType ? helper.call(depth0, {"name":"minutes","hash":{},"data":data}) : helper)))
    + "\" />\n    </div>\n  </div>\n  <div class=\"model-body\">\n    <span class=\"view\">";
  stack1 = ((helper = helpers.compiled_details || (depth0 && depth0.compiled_details)),(typeof helper === functionType ? helper.call(depth0, {"name":"compiled_details","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "</span>\n    <textarea class=\"edit\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":details\" placeholder=\"Details\">"
    + escapeExpression(((helper = helpers.details || (depth0 && depth0.details)),(typeof helper === functionType ? helper.call(depth0, {"name":"details","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n</li>";
},"useData":true});
templates['entry/select'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n      <h3 class=\"headertext edit-link selected-key\"><i class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.icon)),stack1 == null || stack1 === false ? stack1 : stack1.className)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.icon)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</i > "
    + escapeExpression(((helper = helpers.selectedKey || (depth0 && depth0.selectedKey)),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedKey","hash":{},"data":data}) : helper)))
    + "</h3>\n    ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n      <h3 class=\"headertext edit-link placeholder\"><i class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.icon)),stack1 == null || stack1 === false ? stack1 : stack1.className)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.icon)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</i > "
    + escapeExpression(((helper = helpers.placeholder || (depth0 && depth0.placeholder)),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "</h3>\n    ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n          <li id=\""
    + escapeExpression(((helper = helpers.id || (depth0 && depth0.id)),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n              data-value=\""
    + escapeExpression(((helper = helpers.resource_uri || (depth0 && depth0.resource_uri)),(typeof helper === functionType ? helper.call(depth0, {"name":"resource_uri","hash":{},"data":data}) : helper)))
    + "\"\n              class=\"select-option ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\"\n          >\n            "
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n          </li>\n        ";
},"6":function(depth0,helpers,partials,data) {
  return "option-selected";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n\n<div id=\""
    + escapeExpression(((helper = helpers.field || (depth0 && depth0.field)),(typeof helper === functionType ? helper.call(depth0, {"name":"field","hash":{},"data":data}) : helper)))
    + "-select\" class=\"single-select\">\n  <div class=\"click-away-overlay\"></div>\n  <input class=\"select-input\" name=\""
    + escapeExpression(((helper = helpers.cid || (depth0 && depth0.cid)),(typeof helper === functionType ? helper.call(depth0, {"name":"cid","hash":{},"data":data}) : helper)))
    + ":"
    + escapeExpression(((helper = helpers.field || (depth0 && depth0.field)),(typeof helper === functionType ? helper.call(depth0, {"name":"field","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"/>\n  <div class=\"select-display\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selectedKey), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"select-drop\">\n      <div class=\"select-search\">\n        <input type=\"text\" autocomplete=\"off\" placeholder=\""
    + escapeExpression(((helper = helpers.hint || (depth0 && depth0.hint)),(typeof helper === functionType ? helper.call(depth0, {"name":"hint","hash":{},"data":data}) : helper)))
    + "\"/>\n        <i class=\"fa fa-search fa-2x\"></i>\n      </div>\n      <ul class=\"select-options\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n      </ul>\n      <h3 class=\"edit-link select-create\">\n      </h3>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['partials/rating'] = template({"1":function(depth0,helpers,partials,data,depth1) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n		<label for=\""
    + escapeExpression(((stack1 = (depth1 && depth1.cid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":rating-"
    + escapeExpression(((helper = helpers.rating || (depth0 && depth0.rating)),(typeof helper === functionType ? helper.call(depth0, {"name":"rating","hash":{},"data":data}) : helper)))
    + "\">\n			<input id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.cid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":rating-"
    + escapeExpression(((helper = helpers.rating || (depth0 && depth0.rating)),(typeof helper === functionType ? helper.call(depth0, {"name":"rating","hash":{},"data":data}) : helper)))
    + "\" type=\"radio\" name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.cid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":rating\" value=\""
    + escapeExpression(((helper = helpers.rating || (depth0 && depth0.rating)),(typeof helper === functionType ? helper.call(depth0, {"name":"rating","hash":{},"data":data}) : helper)))
    + "\"\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checked), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "/>\n			<img src=\"/static/img/rating-"
    + escapeExpression(((helper = helpers.rating || (depth0 && depth0.rating)),(typeof helper === functionType ? helper.call(depth0, {"name":"rating","hash":{},"data":data}) : helper)))
    + ".png\">\n		</label>\n	";
},"2":function(depth0,helpers,partials,data) {
  return " checked";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<div class=\"rating\">\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.ratings), {"name":"each","hash":{},"fn":this.programWithDepth(1, data, depth0),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</div>";
},"useData":true});
templates['partials/time'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n		<select id=\""
    + escapeExpression(((helper = helpers.identifier || (depth0 && depth0.identifier)),(typeof helper === functionType ? helper.call(depth0, {"name":"identifier","hash":{},"data":data}) : helper)))
    + "-hour\" name=\""
    + escapeExpression(((helper = helpers.identifier || (depth0 && depth0.identifier)),(typeof helper === functionType ? helper.call(depth0, {"name":"identifier","hash":{},"data":data}) : helper)))
    + ":hour\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.hours), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n		</select>\n	";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n				<option value=\""
    + escapeExpression(((helper = helpers.value || (depth0 && depth0.value)),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = helpers.display || (depth0 && depth0.display)),(typeof helper === functionType ? helper.call(depth0, {"name":"display","hash":{},"data":data}) : helper)))
    + "</option>\n			";
},"3":function(depth0,helpers,partials,data) {
  return "selected";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n		<select id=\""
    + escapeExpression(((helper = helpers.identifier || (depth0 && depth0.identifier)),(typeof helper === functionType ? helper.call(depth0, {"name":"identifier","hash":{},"data":data}) : helper)))
    + "-minute\" name=\""
    + escapeExpression(((helper = helpers.identifier || (depth0 && depth0.identifier)),(typeof helper === functionType ? helper.call(depth0, {"name":"identifier","hash":{},"data":data}) : helper)))
    + ":minute\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.minutes), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n		</select>\n	";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n		<select id=\""
    + escapeExpression(((helper = helpers.identifier || (depth0 && depth0.identifier)),(typeof helper === functionType ? helper.call(depth0, {"name":"identifier","hash":{},"data":data}) : helper)))
    + "-period\" name=\""
    + escapeExpression(((helper = helpers.identifier || (depth0 && depth0.identifier)),(typeof helper === functionType ? helper.call(depth0, {"name":"identifier","hash":{},"data":data}) : helper)))
    + ":period\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.periods), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n		</select>\n	";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<div class=\"time-select\">\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hours), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.minutes), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.periods), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</div>";
},"useData":true});
})();