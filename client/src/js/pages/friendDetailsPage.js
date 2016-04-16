'use strict';

var Page = require('../framework/page');

var FriendDetailsScreen = Page.extend({

  id: 'friendDetails',

  data: require('../../storage').friendsData,

  template: require('../../templates/pages/friendDetails.hbs'),

  buttonEvents: {
    right: 'goToFriendRequestPage',
    left: 'goToFriendsSelectionPage',
    face: 'goToHomePage'
  },

  goToFriendRequestPage: function() {
    window.App.navigate('friendRequest');
  },

  goToFriendsSelectionPage: function() {
    window.App.navigate('friendsSelection');
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  getFriendData: function(cid) {
    return this.data.get(this.options.cid);
  },

  render: function() {
    var friend = this.getFriendData().toJSON();
    this.$el.html(this.template(friend));
    return this;
  }

});

module.exports = new FriendDetailsScreen();
