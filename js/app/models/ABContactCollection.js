define(['requirements'], function () {
    AB.contactsCollection = Backbone.Collection.extend({
        model: AB.contactModel,
        url: '../php/listContacts.php'
    });
});