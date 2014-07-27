App.Router = Backbone.Router.extend({
  routes: {
    "(/)": "home",
    "transactions(/)": "transactions",
    "import(/)": "import",
    "*unknown": "unknown"
  }
});

App.router = new App.Router;
App.router.on("route:home", routeHome);
App.router.on("route:transactions", routeTransactions);
App.router.on("route:import", routeImport);
App.router.on("route:unknown", routeUnknown);

function routeHome () {
  console.log("HOME");
  App.regionContent.empty();
}

function routeTransactions () {
  console.log("TRANSACTIONS");
  var test = new App.Models.TransactionList([
    { amount: 1 }, { amount: 2 }, { amount: 5 }
  ]);
  var view = new App.Views.TransactionList({
    collection: test
  });
  App.regionContent.show(view);
}

function routeImport () {
  console.log("IMPORT");
  var view = new App.Views.ImportForm();
  App.regionContent.show(view);
}

function routeUnknown () {
  console.log("UNKNOWN");
}
