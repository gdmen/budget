/*
 * Transaction Models
 */
App.Models.Transaction = App.Models.Tastypie.extend({
  urlRoot: "/api/v1/transaction/",
});

App.Models.TransactionCollection = App.Models.TastypieCollection.extend({
  model: App.Models.Transaction,
  url: "/api/v1/transaction/",
});
