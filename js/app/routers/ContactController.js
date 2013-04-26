define(['requirements'], function () {
    app.controllers.ContactController = Backbone.Router.extend({
        initialize : function () {
            this.view = new app.views.ContactAddView();

            this.view.bind(this.view.EVENTS.submitForm,
                $.proxy(this.addContact, this));
        },

        renderAddNewContactPage: function () {
            this.view.render();
        },

        addContact: function () {
            var full_name = $('#full_name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var address = $('#address').val();

            var contactModel = new app.models.ContactModel({
                full_name: full_name,
                email: email,
                phone: phone,
                address: address
            });
            //        contactmodel.save();
            var contactCollection = localStorage['contacts'];
            if (_.isUndefined(contactCollection)) {
                contactCollection = [];
            } else {
                contactCollection = JSON.parse(contactCollection);
            }
            contactCollection.push(contactModel);
            localStorage['contacts'] = JSON.stringify(contactCollection);
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
