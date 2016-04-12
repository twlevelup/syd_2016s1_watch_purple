'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToFriends',
    top: 'goToServices',
    bottom: 'goToID',
    left: 'goToEvents'
  },

  goToFriends: function() {
    window.App.navigate('friends');
  },

  goToServices: function() {
    //$('#watch-face').animate({scrollTop: '-=70px'}); //old scroll code
    window.App.navigate('services');
  },

  goToID: function() {
    //$('#watch-face').animate({scrollTop: '+=70px'}); //old scroll code
    window.App.navigate('id');
  },

  goToEvents: function() {
    window.App.navigate('eventsList');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
