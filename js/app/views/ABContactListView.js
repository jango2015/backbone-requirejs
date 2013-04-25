define(['requirements'], function () {
    AB.listView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#listContactsTemplate').html()),

        initialize: function () {
            _.bindAll(this, 'listContactsPage', 'render');
        },

        render: function (response) {
            var self = this;

            this.$el.html(this.template({contacts: response}));
            $('#contactsGrid tr[data-id]').each(function () {
                var id = $(this).attr('data-id');
                $(this).find('a:first').click(function () {
                    self.editContact(id);
                });
                $(this).find('a:last').click(function () {
                    self.deleteContact(id);
                });
            });
        },

        listContactsPage: function (querystring) {
            var self = this;

            AB.contactscollection.fetch({
                data: querystring,
                success: function (collection, response) {
                    self.render(response);
                }
            });
        },

        deleteContact: function (id) {
            if (confirm('Are you sure to delete?')) {
                AB.contactscollection.get(id).destroy();
            }
        },

        editContact: function (id) {
            AB.router.navigate('edit_contact/' + id, {trigger: true});
        }
    });
});