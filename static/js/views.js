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

App.Views.CategorizeTransaction = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["categorize_transaction"],
  tagName: "tr",
  className: "transaction",
  triggers: {
    "click .save": "save:model"
  },
  constructor: function () {
    var view = this;
    view.on("save:model", view.save);
    Backbone.Marionette.ItemView.apply(view, arguments);
  },
  save: function () {
    var view = this;
    var category = view.$el.find("#category").val();
    console.log(view.model);
    view.model.set("category", {'pk': GLOBAL.categories_lookup[category]});
    view.model.save();
  },
  serializeData: function () {
    var view = this;
    return _.extend(
      Backbone.Marionette.ItemView.prototype.serializeData.call(view),
      {
        category_select_html: GLOBAL.categories_html
      }
    );
  }
});

App.Views.CategorizeTransactions = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["categorize_transactions"],
  id: "transaction-list",
  childView: App.Views.CategorizeTransaction,
  childViewContainer: "tbody",
  constructor: function () {
    var view = this;
    view.collection = new App.Models.TransactionList(uncategorized_only = true);
    view.collection.fetch({
      success: function () {
        view.render();
      }
    });
    Backbone.Marionette.CompositeView.apply(view, arguments);
  },
  serializeData: function () {
    return {
      remaining: this.collection.length
    };
  }
});
