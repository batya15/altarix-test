define(['backbone', './app.jade', 'views/area/area', 'views/controller/controller'],
    function(Backbone, template) {

    var Area = require('views/area/area');
    var Controller = require('views/controller/controller');

    return Backbone.View.extend({
        el: 'body',
        events: {
          'click #button': 'addView',
          'click #single': 'addSingle'
        },
        initialize: function() {
            console.log('Панель');
        },
        render: function() {
            this.$el.html(template());
            this.renderArea();
            this.renderController();
        },
        renderArea: function () {
            var v = new Area();
            this.$('.area').append(v.$el);
            v.render();
        },
        renderController: function () {
            var v = new Controller();
            this.$('.controller').append(v.$el);
            v.render();
        }
    });

});