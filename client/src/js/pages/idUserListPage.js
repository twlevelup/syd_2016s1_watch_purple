'use strict';

var Menu = require('../framework/menu'),
  storage = require('../../storage');

var IdUserListScreen = Menu.extend({

  id: 'idUserList',

  buttonEvents: {
    right: 'select',
    left: 'goToHomePage',
    top: 'previous',
    bottom: 'next'
  },

  getMenuItemLabel: function(menuItem) {
    return menuItem.get('names');
  },

  select: function() {
    window.App.navigate('idList/' + this.selected.cid);
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  collection: storage.idsData

});

module.exports = new IdUserListScreen();
