define(['requirements'], function () {
    app.contactsCollection = Backbone.Collection.extend({
        model: app.models.ContactModel,
        url: '../php/listContacts.php'
    });
});