'use strict';

var Menu = require('../framework/menu'),
  storage = require('../../storage');

// NOTE you can use a custom template like any other backbone page
// NOTE you can load JSON files by modifying src/storage/index.js

var ServiceSelected = Menu.extend({

  id: 'test-menu',

  buttonEvents: {
    right: 'select',
    left: 'back',
    top: 'previous',
    bottom: 'next'
  },

  template: require('../../templates/pages/serviceSelected.hbs'),

  getMenuItemLabel: function(menuItem) {
    return menuItem.get('services');
  },

  select: function() {
    // TODO make the router a singleton?
    // TODO move showPage in to the router, might be able to get rid of the activePage stuff too
    // TODO include it at the top level instead of inside the app?
    window.App.navigate('serviceDetails/' + this.selected.cid);
  },

  collection: storage.serviceSelectedData

});

module.exports = new ServiceSelected();
