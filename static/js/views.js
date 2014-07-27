/*
 * Allows use of all Handlebars templates as partials.
 */
Handlebars.partials = Handlebars.templates;

App.Views.TransactionView = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["transaction"],
  tagName: "tr",
  className: "transaction"
});
App.Views.TransactionListView = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["transactions"],
  tagName: "table",
  id: "transaction_list",
  childView: App.Views.TransactionView,
  childViewContainer: "tbody"
});

App.Views.UploadView = Backbone.Marionette.View.extend({
  template: Handlebars.templates["upload"]
});
