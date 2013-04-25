define(['requirements'], function () {
    AB.Router = Backbone.Router.extend({
        routes: {
            'list_contacts': 	'renderListContactsPage',
            'add_new_contact': 	'renderAddNewContactPage',
            'search_contacts': 	'renderSearchContactsPage',
            'edit_contact/:id': 'renderEditContactPage'
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
