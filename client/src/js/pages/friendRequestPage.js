'use strict';

var PageView = require('../framework/page');

var FriendRequestScreen = PageView.extend({

  id: 'friendRequest',

  template: require('../../templates/pages/friendRequest.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    left: 'goToHomePage',
    face: 'goToHomePage'
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new FriendRequestScreen();
