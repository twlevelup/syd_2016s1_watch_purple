'use strict';

var PageView = require('../framework/page');

var FriendsSelectionScreen = PageView.extend({

  id: 'friendsSelection',

  template: require('../../templates/pages/friendsSelection.hbs'),

  buttonEvents: {
    right: 'goToFriendDetailsPage',
    left: 'goToHomePage',
    face: 'goToHomePage'
  },

  goToFriendDetailsPage: function() {
    window.App.navigate('friendDetails');
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new FriendsSelectionScreen();
