define(['requirements'], function () {
    AB.ContactController = Backbone.Router.extend({

        routes: {
        },

        renderAddNewContactPage: function () {
            AB.addview.addContactPage();
        },

        renderListContactsPage: function () {
            AB.listview.setElement('div.abPanel');
            AB.listview.listContactsPage();
        },

        renderSearchContactsPage: function () {
            AB.searchview.searchContactsPage();
        },

        renderEditContactPage: function (id) {
            AB.addview.addContactPage(id);
        }
    });
});
