define(['requirements'], function () {
    AB.searchView = Backbone.View.extend({
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
            AB.listview.setElement('#grid');
            AB.listview.render({});
        },

        searchContacts: function (event) {
            var full_name = $('#full_name').val(),
                email = $('#email').val();

            AB.listview.setElement('#grid');
            AB.listview.listContactsPage({full_name: full_name, email: email});
            return false;
        }
    });
});
