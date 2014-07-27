/*
 * Transaction Models
 */
App.Models.Transaction = App.Models.Base.extend({
  urlRoot: "/api/v0/transaction/",
});

App.Models.TransactionList = App.Models.BaseCollection.extend({
  model: App.Models.Transaction,
  url: "/api/v0/transaction/",
});
