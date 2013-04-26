define(['requirements'], function () {
    app.Router = Backbone.Router.extend({
        routes: {
            'list_contacts': 	'renderListContactsPage',
            'add_new_contact': 	'contactAddPage',
            'search_contacts': 	'renderSearchContactsPage',
            'edit_contact/:id': 'renderEditContactPage'
        },

        contactAddPage : function () {
            var contactController = new app.controllers.ContactController();
            contactController.renderAddNewContactPage();
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
