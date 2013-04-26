define(['requirements'], function () {
    app.searchView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#searchContactsTemplate').html()),

        events: {
            'submit form#frmSearchContacts': 'searchContacts'
        },

        initialize: function () {
            _.bindAll(this, 'searchContactsPage', 'searchContacts');
        },

        searchContactsPage: function () {
            this.$el.html(this.template);
            app.listview.setElement('#grid');
            app.listview.render({});
        },

        searchContacts: function (event) {
            var full_name = $('#full_name').val(),
                email = $('#email').val();

            app.listview.setElement('#grid');
            app.listview.listContactsPage({full_name: full_name, email: email});
            return false;
        }
    });
});
