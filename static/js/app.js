var App = new Backbone.Marionette.Application();
App.addRegions({
  regionContent: "#content"
});

// Instantiate subspaces.
App.Meta = {};
App.Models = {};
App.Views = {};

App.on('start', function (options) {
  Backbone.history.start();
});

var options = {};

$(function () {
  App.start(options);
});
