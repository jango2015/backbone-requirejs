define(['requirements'], function () {
    app.controllers.ProductController = Backbone.Router.extend({
        initialize : function () {
            this.view = new app.views.ABProductAddView();

            var events = app.events.ProductAddEvents;
            this.view.bind(events.submitForm,
                $.proxy(this.addProduct, this));
        },

        renderAddNewProductPage: function () {
            this.view.render();
        },

        addProduct: function (options) {
        },

        renderListProductsPage: function () {
            app.listview.setElement('div.abPanel');
            app.listview.listProductsPage();
        },

        renderSearchProductsPage: function () {
            app.searchview.searchProductsPage();
        },

        renderEditProductPage: function (id) {
            app.addview.render(id);
        }
    });
});
