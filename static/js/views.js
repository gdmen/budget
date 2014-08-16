/*
 * Allows use of all Handlebars templates as partials.
 */
Handlebars.partials = Handlebars.templates;

App.Views.Transaction = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["transaction"],
  tagName: "tr",
  className: "transaction"
});

App.Views.TransactionList = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["transactions"],
  tagName: "table",
  id: "transaction-list",
  childView: App.Views.Transaction,
  childViewContainer: "tbody"
});

App.Views.CategorizeTransaction = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["categorize_transaction"],
  tagName: "tr",
  className: "transaction",
  events: {
    "change #category": "save"
  },
  constructor: function () {
    var view = this;
    Backbone.Marionette.ItemView.apply(view, arguments);
  },
  save: function () {
    var view = this;
    var category = view.$el.find("#category").val();
    view.model.set("category", {'pk': GLOBAL.categories_lookup[category]});
    view.model.save();
  },
  serializeData: function () {
    var view = this;
    var category = view.model.get("category");
    if (category) {
      category = category.name;
    }
    return _.extend(
      Backbone.Marionette.ItemView.prototype.serializeData.call(view),
      {
        category_select_html: GLOBAL.get_categories_html(selected=category)
      }
    );
  }
});

App.Views.CategorizeTransactions = Backbone.Marionette.CompositeView.extend({
  template: Handlebars.templates["categorize_transactions"],
  id: "transaction-list",
  childView: App.Views.CategorizeTransaction,
  childViewContainer: "tbody",
  serializeData: function () {
    return {
      remaining: this.collection.length
    };
  }
});

App.Views.Insight = Backbone.Marionette.ItemView.extend({
  template: Handlebars.templates["insight"],
  id: "insight",
  tagName: "div",
  initialize: function () {
    var view = this;
    view.charts = {};
    view.listenTo(view.collection, 'sync', view.collectionReloaded);
  },
  collectionReloaded: function () {
    var view = this;
    var data = _
    .chain(view.collection.toJSON())
    .groupBy('date')
    .map(function(value, key) {
      return [
        Date.parse(key),
        Math.abs(_.reduce(_.pluck(value, 'amount'), function (memo, amt) {
          return memo + Math.min(0, parseFloat(amt));
        }, 0))
      ];
    }).value();
    view.charts.dailySpend.series[0].setData(data);
    data = _
    .chain(view.collection.toJSON())
    .groupBy(function(e) {
      return e.category.name;
    })
    .map(function(value, key) {
      return [
        key,
        Math.abs(_.reduce(_.pluck(value, 'amount'), function (memo, amt) {
          return memo + Math.min(0, parseFloat(amt));
        }, 0))
      ];
    }).value();
    view.charts.categorySpend.series[0].setData(data);
  },
  serializeData: function () {
    var view = this;
    return _.extend(
      Backbone.Marionette.ItemView.prototype.serializeData.call(view),
      {
      }
    );
  },
  onShow: function () {
    var view = this;
    view.charts.dailySpend = new Highcharts.Chart({
      chart: {
        renderTo: "daily-spend",
        type: 'column'
      },
      title: {
        text: 'Daily Spend'
      },
      xAxis: {
        type: 'datetime'
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        color: 'rgba(60,186,61,1)',
        data: [],
        tooltip: {
          valuePrefix: '$',
          valueDecimals: 2
        }
      }]
    });
    view.charts.categorySpend = new Highcharts.Chart({
      chart: {
        renderTo: "category-spend",
        type: 'column'
      },
      title: {
        text: 'Category Spend'
      },
      xAxis: {
        categories: []
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        color: 'rgba(60,186,61,1)',
        data: [],
        tooltip: {
          valuePrefix: '$',
          valueDecimals: 2
        }
      }]
    });
  }
});
