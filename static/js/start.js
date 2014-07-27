$(function () {
  var test = new App.Models.TransactionCollection([
    { amount: 1 }, { amount: 2 }, { amount: 5 }
  ]);
  App.addInitializer(function (options) {
    var transactionListView = new TransactionListView({
      collection: test
    });
    App.regionContent.show(transactionListView);
  });
  var options = {};
  App.start(options);
});
