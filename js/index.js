define('app', ['requirements', 'app/routers/ABRouter', 'app/models/ABContactModel',
        'app/views/ABContactAddView', 'app/views/ABContactListView',
        'app/views/ABContactSearchView', 'app/models/ABContactCollection',
        'app/routers/ABContact'], function () {

});

require(['app'], function() {

    $(function () {
        app.run();
    });
});
