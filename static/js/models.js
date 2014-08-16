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

App.Models.BriefTransaction = App.Models.Base.extend({
  urlRoot: "/api/v0/transaction/",
});

App.Models.BriefTransactionList = App.Models.BaseCollection.extend({
  model: App.Models.BriefTransaction,
  initialize: function (start, end) {
    var view = this;
    var start = start;
    var end = end;
  },
  url: function () {
    var view = this;
    var url = "/api/v0/brief_transaction/?";
    if (view.start) {
      url += "date__gte=" + view.start + "&";
    }
    if (view.end) {
      url += "date__lte=" + view.end + "&";
    }
    return url;
  },
});
