define(['requirements'], function () {
    app.contactsCollection = Backbone.Collection.extend({
        model: app.contactModel,
        url: '../php/listContacts.php'
    });
});