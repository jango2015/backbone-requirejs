define(['requirements'], function () {
    app.contactsCollection = Backbone.Collection.extend({
        model: app.models.ProductModel,
        url: '../php/listContacts.php'
    });
});