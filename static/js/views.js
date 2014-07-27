/*
 * Allows use of all Handlebars templates as partials.
 */
Handlebars.partials = Handlebars.templates;

TransactionView = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["transaction"],
  tagName: "tr"
});
TransactionsView = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["transactions"],
  itemView: TransactionView,
  tagName: "table",

  appendHtml: function (collectionView, itemView) {
    collectionView.$("tbody").append(itemView.el);
  }
});
App.addInitializer(function (options) {
  var transactionsView = new TransactionsView({
    collection: options.test
  });
  App.regionContent.show(transactionsView);
});
