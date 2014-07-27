/*
 * Allows use of all Handlebars templates as partials.
 */
Handlebars.partials = Handlebars.templates;

TransactionView = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["transaction"],
  tagName: "tr",
  className: "transaction"
});
TransactionListView = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["transactions"],
  tagName: "table",
  id: "transaction_list",
  childView: TransactionView,
});
