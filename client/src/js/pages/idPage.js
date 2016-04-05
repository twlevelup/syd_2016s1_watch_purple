'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'id',

  template: require('../../templates/pages/id.hbs'),

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
