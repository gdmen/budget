App.Router = Backbone.Router.extend({
  routes: {
    "(/)": "home",
    "transactions(/)": "transactions",
    "*unknown": "unknown"
  }
});

App.router = new App.Router;
App.router.on("route:home", routeHome);
App.router.on("route:transactions", routeTransactions);
App.router.on("route:unknown", routeUnknown);

function routeHome () {
  console.log("HOME");
}

function routeTransactions () {
  console.log("TRANSACTIONS");
  var test = new App.Models.TransactionCollection([
    { amount: 1 }, { amount: 2 }, { amount: 5 }
  ]);
  var transactionListView = new App.Views.TransactionListView({
    collection: test
  });
  App.regionContent.show(transactionListView);
}

function routeUnknown () {
  console.log("UNKNOWN");
}
