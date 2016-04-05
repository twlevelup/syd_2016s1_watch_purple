'use strict';

var PageView = require('../framework/page');

var FriendDetailsScreen = PageView.extend({

  id: 'friendDetails',

  template: require('../../templates/pages/friendDetails.hbs'),

  buttonEvents: {
    right: 'goToFriendRequestPage',
    left: 'goToFriendsSelectionPage'
  },

  goToFriendRequestPage: function() {
    window.App.navigate('friendRequest');
  },

  goToFriendsSelectionPage: function() {
    window.App.navigate('friendsSelection');
  },

  render: function() {
    var friend = {name: 'Danny Hope', phoneNumber: '0400 000 000', address: '51 Pitt Street, Sydney NSW 2000'};
    this.$el.html(this.template(friend));
    return this;
  }

});

module.exports = new FriendDetailsScreen();
