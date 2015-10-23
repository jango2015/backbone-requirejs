define(['requirements'], function () {
    app.views.ABContactAddView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#addContactTemplate').html()),

        events: {
            'submit form#frmAddContact': 'addContact'
        },



        initialize: function () {
            _.bindAll(this, 'render', 'addContact');
        },

        render: function () {
            var product = {};
            this.$el.html(this.template({product: product}));
        },

//    render: function (id) {
//        var product = {};
//        var model = app.productscollection.get(id);
//
//        if (id !== undefined && model !== undefined) {
//            product = model.toJSON();
//        }
//        this.$el.html(this.template({product: product}));
//    },

        addContact: function (event) {
            var events = app.events.ContactAddEvents;
            this.trigger(events.submitForm);
        }
    });
});
