(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['transaction'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.account)),stack1 == null || stack1 === false ? stack1 : stack1.institution)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.account)),stack1 == null || stack1 === false ? stack1 : stack1.account_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.category)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>";
  if (helper = helpers.payee) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payee); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n";
  return buffer;
  });
templates['transactions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<thead>\n  <tr class='header'>\n    <th>Date</th>\n    <th>Institution</th>\n    <th>Account</th>\n    <th>Type</th>\n    <th>Amount</th>\n    <th>Category</th>\n    <th>Payee</th>\n  </tr>\n</thead>\n<tbody>\n</tbody>\n";
  });
})();