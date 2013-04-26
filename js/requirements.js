define(['libs/backbone', 'libs/jquery'], function () {
    app = {
        run: function () {
            this.addview = new this.addView();
            this.listview = new this.listView();
            this.searchview = new this.searchView();
            this.contactscollection = new app.contactsCollection();
            this.router = new this.Router();
            Backbone.history.start();
            this.router.navigate('add_new_contact', {trigger: true});
        }
    };

    app.controllers = {};
});