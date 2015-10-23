define('app', ['requirements', 'app/routers/ABRouter', 'app/models/ProductModel',
        'app/views/ContactAddView', 'app/views/ProductListView',
        'app/views/ProductSearchView', 'app/models/ProductCollection',
        'app/routers/ContactController', 'app/routers/ContactAddEvents'], function () {

});

require(['app'], function() {

    $(function () {
        app.run();
    });
});
