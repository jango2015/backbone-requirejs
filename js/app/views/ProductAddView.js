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
            var events = app.events.ProductAddEvents;
            this.trigger(events.submitForm);
        }
    });
});
