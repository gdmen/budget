/*
 * Transaction Models
 */
App.Models.Transaction = App.Models.Tastypie.extend({
  urlRoot: "/api/v1/transaction/",
});

App.Models.Transactions = App.Models.TastypieCollection.extend({
  model: App.Models.Transaction,
  url: "/api/v1/transaction/",
});
