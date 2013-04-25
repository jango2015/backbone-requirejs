define(['libs/backbone', 'libs/jquery'], function () {
    AB = {
        run: function () {
            this.addview = new this.addView();
            this.listview = new this.listView();
            this.searchview = new this.searchView();
            this.contactscollection = new AB.contactsCollection();
            this.router = new this.Router();
            Backbone.history.start();
            this.router.navigate('add_new_contact', {trigger: true});
        }
    };
});