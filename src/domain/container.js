define(['backbone'], function(Backbone) {

    var Container = Backbone.Model.extend({
        defaults: {
            width: 480,
            height: 560
        }
    });

    return new Container();

});