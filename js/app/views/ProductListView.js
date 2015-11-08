define(['requirements'], function () {
    app.listView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#listProductsTemplate').html()),

        initialize: function () {
            _.bindAll(this, 'listProductsPage', 'render');
        },

        render: function (response) {
            var self = this;

            this.$el.html(this.template({products: response}));
            $('#productsGrid tr[data-id]').each(function () {
                var id = $(this).attr('data-id');
                $(this).find('a:first').click(function () {
                    self.editProduct(id);
                });
                $(this).find('a:last').click(function () {
                    self.deleteProduct(id);
                });
            });
        },

        listProductsPage: function (querystring) {
            var self = this;

            app.productscollection.fetch({
                data: querystring,
                success: function (collection, response) {
                    self.render(response);
                },
                error : function (collection, response) {
                    self.render(response)
                }
            });
        },

        deleteProduct: function (id) {
            if (confirm('Are you sure to delete?')) {
                app.productscollection.get(id).destroy();
            }
        },

        editProduct: function (id) {
            app.router.navigate('edit_product/' + id, {trigger: true});
        }
    });
});