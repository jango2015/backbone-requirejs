define(['requirements'], function () {
    app.models.ProductModel = Backbone.Model.extend({
        fields: {
            id: 'id',
            brand: 'brand',
            color: 'color',
            name: 'name',
            size: 'size'
        },

        defaults: {
            id: null,
            brand: null,
            color: null,
            name: null,
            size: null
        },

        initialize : function () {
            if (!_.all(this.fields, function (item, key) {
                return _.contains(this.keys(), item);
            }, this)) {
            } else {
            }
        },

        getBrand : function () {
            return this.get(this.fields.brand);
        },

        getId : function () {
            return this.get(this.fields.id);
        },

        getColor : function () {
            return this.get(this.fields.color);
        },

        getSize : function () {
            return this.get(this.fields.size);
        },

        getName : function () {
            return this.get(this.fields.name);
        }
    });
});