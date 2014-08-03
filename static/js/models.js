/*
 * Transaction Models
 */
App.Models.Transaction = App.Models.Base.extend({
  urlRoot: "/api/v0/transaction/",
});

App.Models.TransactionList = App.Models.BaseCollection.extend({
  model: App.Models.Transaction,
  initialize: function (uncategorized_only) {
    var view = this;
    view.uncategorized_only = uncategorized_only
  },
  url: function () {
    var view = this;
    var url = "/api/v0/transaction/?";
    if (view.uncategorized_only) {
      url += "category=None&";
    }
    return url;
  },
});
