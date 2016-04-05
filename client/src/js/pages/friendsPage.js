'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'friends',

  template: require('../../templates/pages/friends.hbs'),

  buttonEvents: {
    left: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
