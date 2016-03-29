'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToFriends',
    top: 'goToServices',
    bottom: 'goToID',
    left: 'goToEvents',
    face: 'goToMe'
  },

  goToFriends: function() {
    window.App.navigate('friendsSelection');
  },

  goToServices: function() {
    window.App.navigate('services');
  },

  goToID: function() {
    window.App.navigate('id');
  },

  goToEvents: function() {
    window.App.navigate('eventsList');
  },

  goToMe: function() {
    window.App.navigate('me');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
