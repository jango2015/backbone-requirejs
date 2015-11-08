define(['requirements'], function () {
    app.Router = Backbone.Router.extend({
        routes: {
            'list_products': 	'renderListProductsPage',
            'add_new_product': 	'productAddPage',
            'search_products': 	'renderSearchProductsPage',
            'edit_product/:id': 'renderEditProductPage'
        },

        productAddPage : function () {
            var productController = new app.controllers.ProductController();
            productController.renderAddNewProductPage();
        },

        renderListProductsPage: function () {
            var controller = new app.controllers.ProductController();
            controller.renderListProductsPage();
        },

        renderSearchProductsPage: function () {
            app.searchview.searchProductsPage();
        },

        renderEditProductPage: function (id) {
            app.addview.render(id);
        }
    });
});
