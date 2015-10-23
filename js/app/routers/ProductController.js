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

        addProduct: function () {
            var brand = $('#brand').val();
            var name = $('#name').val();
            var color = $('#color').val();
            var size = $('#size').val();

            var productModel = new app.models.ProductModel({
                brand: brand,
                name: name,
                color: color,
                size: size
            });
            var productCollection = [];
            if (!_.isUndefined(localStorage['products'])) {
                productCollection = JSON.parse(localStorage['products']);
            }
            productCollection.push(productModel);
            localStorage['products'] = JSON.stringify(productCollection);
            return false;
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
