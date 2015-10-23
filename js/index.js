define('app', ['requirements', 'app/routers/ABRouter', 'app/models/ProductModel',
        'app/views/ProductAddView', 'app/views/ProductListView',
        'app/views/ProductSearchView', 'app/models/ProductCollection',
        'app/routers/ProductController', 'app/routers/ProductAddEvents'], function () {

});

require(['app'], function() {

    $(function () {
        app.run();
    });
});
