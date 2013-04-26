define(['requirements'], function () {
    AB.contactModel = Backbone.Model.extend({
        fields: {
            id: 'id',
            full_name: 'full_name',
            email: 'email',
            phone: 'phone',
            address: 'address'
        },

        defaults: {
            id: null,
            full_name: null,
            email: null,
            phone: null,
            address: null
        },

        initialize : function () {
            if (!_.all(this.fields, function (item, key) {
                return _.contains(this.keys(), item);
            }, this)) {
            } else {
            }
        },

        getFullname : function () {
            return this.get(this.fields.full_name);
        },

        getId : function () {
            return this.get(this.fields.id);
        },

        getEmail : function () {
            return this.get(this.fields.email);
        },

        getAddress : function () {
            return this.get(this.fields.address);
        },

        getPhone : function () {
            return this.get(this.fields.phone);
        }
    });
});