var City = Backbone.Model.extend({
  initialize: function(shots) {
    // console.log(shots);
  }
});

var Shots = Backbone.Collection.extend({
    model: City,
    sync: function(method, model, options) {
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: model.url(),
            processData: false
        }, options);

        return $.ajax(params);
    },

    parse: function(response) {
        return response.shots;
    },

    url: function() {
        return "http://api.dribbble.com/shots/everyone";
    }
});