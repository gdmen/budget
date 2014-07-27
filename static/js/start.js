var options = {
  test: new App.Models.Transactions([
    { amount: 1 }, { amount: 2 }, { amount: 5 }
  ])
};
App.start(options);
