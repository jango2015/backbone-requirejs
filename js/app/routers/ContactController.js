define(['requirements'], function () {
    app.controllers.ContactController = Backbone.Router.extend({
        initialize : function () {
            this.view = new app.views.ABContactAddView();

            var events = app.events.ContactAddEvents;
            this.view.bind(events.submitForm,
                $.proxy(this.addContact, this));
        },

        renderAddNewContactPage: function () {
            this.view.render();
        },

        addContact: function () {
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
