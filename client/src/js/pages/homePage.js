'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToAbout'
  },

  goToContacts: function() {
    window.App.navigate('contacts');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  goToAbout: function() {
    window.App.navigate('about');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
