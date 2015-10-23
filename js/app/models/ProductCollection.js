define(['requirements'], function () {
    app.productsCollection = Backbone.Collection.extend({
        model: app.models.ProductModel,
        url: '../php/listProducts.php'
    });
});