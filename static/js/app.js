var App = new Backbone.Marionette.Application();

options = {}

App.on('start', function (options) {
  Backbone.history.start();
});
App.start(options);
