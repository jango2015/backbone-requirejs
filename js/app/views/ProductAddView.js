define(['requirements'], function () {
    app.views.ABProductAddView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#addProductTemplate').html()),

        events: {
            'submit form#frmAddProduct': 'addProduct'
        },



        initialize: function () {
            _.bindAll(this, 'render', 'addProduct');
        },

        render: function () {
            var product = {};
            this.$el.html(this.template({product: product}));
        },

//    render: function (id) {
//        var product = {};
//        var model = app.productscollection.get(id);
//
//        if (id !== undefined && model !== undefined) {
//            product = model.toJSON();
//        }
//        this.$el.html(this.template({product: product}));
//    },

        addProduct: function (event) {
            var options = {
                brand: this.$el.find('#brand').val(),
                name: this.$el.find('#name').val(),
                color: this.$el.find('#color').val(),
                size: this.$el.find('#size').val()
            };
            this.trigger(
                app.events.ProductAddEvents.submitForm,
                {
                    options: options
                }
            );

            var productModel = new app.models.ProductModel({
                brand: options.brand,
                name: options.name,
                color: options.color,
                size: options.size
            });
            productModel.save();
        }
    });
});
