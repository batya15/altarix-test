define(['backbone'], function(Backbone) {

    var BoxCollection = Backbone.Collection.extend({
        model: Backbone.Model.extend({

        })
    });

    return new BoxCollection();
});