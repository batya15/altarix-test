define(['backbone', 'domain/container','css!./area'], function(Backbone, containerModel){

    return Backbone.View.extend({
        attributes: {
          class: 'v-area'
        },
        initialize: function () {
            this.listenTo(containerModel, 'change', this.setSize);
            this.setSize();
        },
        setSize: function () {
            this.$el.css({
                width: containerModel.get('width'),
                height: containerModel.get('height')
            })
        }
    });

});