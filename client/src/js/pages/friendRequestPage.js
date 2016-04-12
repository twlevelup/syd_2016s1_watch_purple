'use strict';

var PageView = require('../framework/page');

var FriendRequestScreen = PageView.extend({

  id: 'friendRequest',

  template: require('../../templates/pages/friendRequest.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    left: 'goToFriendDetailsPage'
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  goToFriendDetailsPage: function() {
    window.App.navigate('friendDetails');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new FriendRequestScreen();
