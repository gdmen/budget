App.Router = Backbone.Marionette.AppRouter.extend({
  routes: {
    "(/)": "routeHome",
    "transactions(/)": "routeTransactions",
    "categorize(/)": "routeCategorize",
    "*unknown": "routeUnknown"
  },

  routeHome: function () {
    console.log("HOME");
    App.regionContent.empty();
  },

  routeTransactions: function () {
    console.log("TRANSACTIONS");
    transactions = new App.Models.TransactionList();
    transactions.fetch();
    var view = new App.Views.TransactionList({
      collection: transactions
    });
    App.regionContent.show(view);
  },

  routeCategorize: function () {
    console.log("CATEGORIZE");
    var view = new App.Views.CategorizeTransactions();
    App.regionContent.show(view);
  },

  routeUnknown: function () {
    console.log("UNKNOWN");
  }
});

App.router = new App.Router();
