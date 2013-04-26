define(['requirements'], function () {
    app.controllers.ContactController = Backbone.Router.extend({

        routes: {
        },

        renderAddNewContactPage: function () {
            app.addview.addContactPage();
        },

        renderListContactsPage: function () {
            app.listview.setElement('div.abPanel');
            app.listview.listContactsPage();
        },

        renderSearchContactsPage: function () {
            app.searchview.searchContactsPage();
        },

        renderEditContactPage: function (id) {
            app.addview.addContactPage(id);
        }
    });
});
