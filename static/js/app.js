var App = new Backbone.Marionette.Application();
App.addRegions({
  regionContent: "#content"
});

// Instantiate subspaces.
App.Meta = {};
App.Models = {};
App.Views = {};
App.csrf_token = $('meta[name="csrf-token"]').attr('content');

App.on('start', function (options) {
  Backbone.history.start();
});

var options = {};

$(function () {
  App.start(options);
});

// Prepare GLOBAL vars
function generate_select_html (tree) {
  var these = "";
  _.each(tree, function (elem) {
    var this_str = "";
    if (elem.children) {
      this_str = "<optgroup label=\"" + elem.name + "\">";
      this_str += generate_select_html(elem.children);
      this_str += "</optgroup>";
    } else {
      this_str = "<option>" + elem.name + "</option>";
    }
    these += this_str;
  });
  return these;
}
function generate_lookup_dict (tree) {
  var dict = {};
  _.each(tree, function (elem) {
    dict[elem.name] = elem.id;
    if (elem.children) {
      dict = _.extend(dict, generate_lookup_dict(elem.children));
    }
  });
  return dict;
}
GLOBAL.categories_html = generate_select_html(GLOBAL.categories);
GLOBAL.categories_lookup = generate_lookup_dict(GLOBAL.categories);

console.log(GLOBAL.categories_lookup);
