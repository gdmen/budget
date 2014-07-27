/*
 * Allows use of all Handlebars templates as partials.
 */
Handlebars.partials = Handlebars.templates;

App.Views.Transaction = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["transaction"],
  tagName: "tr",
  className: "transaction"
});
App.Views.TransactionList = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["transactions"],
  tagName: "table",
  id: "transaction-list",
  childView: App.Views.Transaction,
  childViewContainer: "tbody"
});

App.Views.ImportForm = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["import"],
  id: "import"
});
