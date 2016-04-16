'use strict';

var Menu = require('../framework/menu'),
  storage = require('../../storage');

var IdUserListScreen = Menu.extend({

  id: 'idUserList',

  template: require('../../templates/pages/idUserList.hbs'),

  buttonEvents: {
    right: 'select',
    left: 'goToHomePage',
    top: 'previous',
    bottom: 'next'
  },

  getMenuItemLabel: function(menuItem) {
    return menuItem.get('name');
  },

  select: function() {
    // TODO make the router a singleton?
    // TODO move showPage in to the router, might be able to get rid of the activePage stuff too
    // TODO include it at the top level instead of inside the app?
    window.App.navigate('idList/' + this.selected.cid);
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  collection: storage.eventsData
  //
  // render: function() {
  //   this.$el.html(this.template());
  //   return this;
  // }

});

module.exports = new IdUserListScreen();
