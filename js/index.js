define('AB', ['requirements', 'app/routers/ABRouter', 'app/models/ABContactModel',
        'app/views/ABContactAddView', 'app/views/ABContactListView',
        'app/views/ABContactSearchView', 'app/models/ABContactCollection'], function () {

});

require(['AB'], function() {

    $(function () {
        AB.run();
    });
});
