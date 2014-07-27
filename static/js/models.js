/*
 * Attribution:
 * http://paltman.com/2012/04/30/integration-backbonejs-tastypie/
 * Tastypie Models avoid redirects for ending '/'s and have recursive toJSON()
 */

App.Models.Tastypie = Backbone.Model.extend({
  /*
   * [gdm] Reverting changes to most recent save.
   */
  discardChanges: function() {
    console.log(this.previousAttributes());
    this.set(this.previousAttributes());
    return this;
  },

  base_url: function() {
    var temp_url = Backbone.Model.prototype.url.call(this);
    return (temp_url.charAt(temp_url.length - 1) === "/" ? temp_url : temp_url+"/");
  },
  
  url: function() {
    return this.base_url();
  },
});

App.Models.TastypieCollection = Backbone.Collection.extend({
  parse: function(response) {
    this.recent_meta = response.meta || {};
    return response.objects || response;
  }
});

/*
 * End Attribution
 */

/*
 * Transaction Models
 */
App.Models.Transaction = App.Models.Tastypie.extend({
  urlRoot: "/api/v1/transaction/",
});

App.Models.Transaction = App.Models.TastypieCollection.extend({
  model: App.Models.Transaction,
  url: "/api/v1/transaction/",
});
