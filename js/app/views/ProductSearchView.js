define(['requirements'], function () {
    app.searchView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#searchProductsTemplate').html()),

        events: {
            'submit form#frmSearchProducts': 'searchProducts'
        },

        initialize: function () {
            _.bindAll(this, 'searchProductsPage', 'searchProducts');
        },

        searchProductsPage: function () {
            this.$el.html(this.template);
            app.listview.setElement('#grid');
            app.listview.render({});
        },

        searchProducts: function (event) {
            var brand = $('#brand').val(),
                color = $('#color').val();

            app.listview.setElement('#grid');
            app.listview.listProductsPage({brand: brand, color: color});
            return false;
        }
    });
});
