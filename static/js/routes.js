App.Router = Backbone.Marionette.AppRouter.extend({
  routes: {
    "(/)": "routeHome",
    "transactions(/)": "routeTransactions",
    "*unknown": "routeUnknown"
  },

  routeHome: function () {
    console.log("HOME");
    App.regionContent.empty();
  },

  routeTransactions: function () {
    console.log("TRANSACTIONS");
    var test = new App.Models.TransactionList([
      { amount: 1 }, { amount: 2 }, { amount: 5 }
    ]);
    test = new App.Models.TransactionList()
    test.fetch();
    var view = new App.Views.TransactionList({
      collection: test
    });
    App.regionContent.show(view);
  },

  routeUnknown: function () {
    console.log("UNKNOWN");
  }
});

App.router = new App.Router();
