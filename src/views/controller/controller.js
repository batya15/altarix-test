define(['backbone', './controller.jade', 'domain/container'], function(Backbone, template, containerModel) {

    return Backbone.View.extend({
        attributes: {
            class: 'v-controller'
        },
        events: {
          'click #setSize': 'setSize'
        },
        initialize: function () {
            this.$el.html(template());
            this.renderSize();
        },
        renderSize: function () {
            this.$('#heightContainer').val(containerModel.get('height'));
            this.$('#widthContainer').val(containerModel.get('width'));
        },
        setSize: function() {
            var w = this.$('#widthContainer').val(),
                h = this.$('#heightContainer').val();
            containerModel.set({
                width: w,
                height: h
            });
        }
    });

});