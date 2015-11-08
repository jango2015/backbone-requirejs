define(['requirements'], function () {
    app.ProductsCollection = Backbone.Collection.extend({
        model: app.models.ProductModel,
        url: 'http://products.local:8080/products/'
    });
});