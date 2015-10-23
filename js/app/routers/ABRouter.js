define(['requirements'], function () {
    app.Router = Backbone.Router.extend({
        routes: {
            'list_products': 	'renderListContactsPage',
            'add_new_product': 	'productAddPage',
            'search_products': 	'renderSearchContactsPage',
            'edit_product/:id': 'renderEditContactPage'
        },

        productAddPage : function () {
            var productController = new app.controllers.ContactController();
            productController.renderAddNewContactPage();
        },

        renderListContactsPage: function () {
            app.listview.setElement('div.abPanel');
            app.listview.listContactsPage();
        },

        renderSearchContactsPage: function () {
            app.searchview.searchContactsPage();
        },

        renderEditContactPage: function (id) {
            app.addview.render(id);
        }
    });
});
