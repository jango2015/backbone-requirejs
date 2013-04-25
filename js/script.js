define('AB', ['requirements', 'app/routers/ABRouter', 'app/models/ABContactModel',
        'app/views/ABContactAddView', 'app/views/ABContactListView',
        'app/views/ABContactSearchView'], function () {

    AB.contactsCollection = Backbone.Collection.extend({
        model: AB.contactModel,
        url: '../php/listContacts.php'
    });
});

require(['AB'], function() {

    $(function () {
        AB.run();
    });
});
