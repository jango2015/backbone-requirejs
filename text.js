AB.addView = Backbone.View.extend({
    events: {
        'submit form#frmAddContact': 'addContact'
    },
      el: 'div.abPanel',
      template: _.template($('#addContactTemplate').html()),
      initialize: function () {
            _.bindAll(this, 'addContactPage');
      },
      addContactPage: function () {
            this.$el.html(this.template());
          },

        addContact: function (event) {
            var full_name = $('#full_name').val(),
            email = $('#email').val(),
            phone = $('#phone').val(),
            address = $('#address').val(),
            id = $('#id').val();

            if (id === '') {
                var contactmodel = new AB.contactModel({
                    full_name: full_name,
                    email: email,
                    phone: phone,
                    address: address
                });
            } else {
                var contactmodel = new AB.contactModel({
                    id: id,
                    full_name: full_name,
                    email: email,
                    phone: phone,
                    address: address
                });
            }
            contactmodel.save();
            return false;
        }

});

AB.contactModel = Backbone.Model.extend({
      sync: function (method, model, options) {
            if (method === 'create' || method === 'update') {
                  return $.ajax({
                        dataType: 'json',
                        url: '../php/addNewContact.php',
                        data: {
                              id: (this.get('id') || ''),
                              full_name: (this.get('full_name') || ''),
                              email: (this.get('email') || ''),
                              phone: (this.get('phone') || ''),
                              address: (this.get('address') || '')
                            },
                            success: function (data) {
                                  // put your code after the contact is saved/updated.
                                }
                              });
                            }
                          }
});
