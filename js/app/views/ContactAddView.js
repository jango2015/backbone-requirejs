define(['requirements'], function () {
    app.views.ContactAddView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#addContactTemplate').html()),

        events: {
            'submit form#frmAddContact': 'addContact'
        },

        EVENTS: {
            submitForm: 'addcontact',
        },

        initialize: function () {
            _.bindAll(this, 'render', 'addContact');
        },

        render: function () {
            var contact = {};
            this.$el.html(this.template({contact: contact}));
        },

//    render: function (id) {
//        var contact = {};
//        var model = app.contactscollection.get(id);
//
//        if (id !== undefined && model !== undefined) {
//            contact = model.toJSON();
//        }
//        this.$el.html(this.template({contact: contact}));
//    },

        addContact: function (event) {
            this.trigger(this.EVENTS.submitForm);
        }
    });
});
