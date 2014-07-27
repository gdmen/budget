/*
 * Adds CSRF token to Backbone.sync headers.
 */
$(function () {
  var _sync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    if (method === 'create' || method === 'update' || method === 'delete') {
      var csrf_token = $('meta[name="csrf-token"]').attr('content');
      options.beforeSend = function(xhr){
        xhr.setRequestHeader('X-CSRFToken', csrf_token);
      };
    }
    return _sync(method, model, options);
  };
});

/* 
 * (Bugfix)
 * Tastypie returns a 201 with an empty response upon successful
 * Backbone.Model.save but jquery ajax incorrectly considers the empty response
 * an error.
 */
$.ajaxSetup({dataFilter: function(data, type) {
  if (type === "json" && data === "") {
    data = null;
  }
  return data;
}});


var App = new Backbone.Marionette.Application();

// Instantiate subspaces.
App.Meta = {};
App.Models = {};
App.Views = {};

options = {}

App.on('start', function (options) {
  Backbone.history.start();
});
App.start(options);
