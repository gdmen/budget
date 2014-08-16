/*
 * Transaction Models
 */
App.Models.Transaction = App.Models.Base.extend({
  urlRoot: "/api/v0/transaction/",
});

App.Models.TransactionList = App.Models.BaseCollection.extend({
  model: App.Models.Transaction,
  initialize: function (category) {
    var view = this;
    view.category = category
  },
  url: function () {
    var view = this;
    var url = "/api/v0/transaction/?";
    if (view.category) {
      url += "category__name=" + view.category + "&";
    }
    return url;
  },
});
