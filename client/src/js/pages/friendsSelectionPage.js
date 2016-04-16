'use strict';

var Menu = require('../framework/menu'),
  storage = require('../../storage');

var FriendsSelectionScreen = Menu.extend({

  template: require('../../templates/pages/friendsSelection.hbs'),

  id: 'friendsSelection',

  buttonEvents: {
    right: 'select',
    left: 'back',
    //face: 'goToHomePage',
    top: 'previous',
    bottom: 'next'
  },
/*
  goToHomePage: function() {
    window.App.navigate('');
  },
  */

  getMenuItemLabel: function(menuItem) {
    return menuItem.get('name');
  },

  select: function() {
    // TODO make the router a singleton?
    // TODO move showPage in to the router, might be able to get rid of the activePage stuff too
    // TODO include it at the top level instead of inside the app?
    window.App.navigate('friendDetails/' + this.selected.cid);
  },

  collection: storage.friendsData

});

module.exports = new FriendsSelectionScreen();
