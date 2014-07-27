/*
 * Adds CSRF token to Backbone.sync headers.
 */
$(function () {
  var _sync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    if (method === 'create' || method === 'update' || method === 'delete') {
      options.beforeSend = function(xhr){
        xhr.setRequestHeader('X-CSRFToken', App.csrf_token);
      };
    }
    return _sync(method, model, options);
  };
});
//$.ajaxSetup({
//  beforeSend: function(xhr, settings) {
//    if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
//      // Only send the token to relative URLs i.e. locally.
//      xhr.setRequestHeader("X-CSRFToken", App.csrf_token);
//    }
//  }
//});

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

/*
 * Attribution:
 * http://paltman.com/2012/04/30/integration-backbonejs-tastypie/
 * Tastypie Models avoid redirects for ending '/'s and have recursive toJSON()
 */

App.Models.Base = Backbone.Model.extend({
  base_url: function() {
    var temp_url = Backbone.Model.prototype.url.call(this);
    return (temp_url.charAt(temp_url.length - 1) === "/" ? temp_url : temp_url+"/");
  },
  
  url: function() {
    return this.base_url();
  },
});

App.Models.BaseCollection = Backbone.Collection.extend({
  parse: function(response) {
    this.recent_meta = response.meta || {};
    return response.objects || response;
  }
});

/*
 * End Attribution
 */
