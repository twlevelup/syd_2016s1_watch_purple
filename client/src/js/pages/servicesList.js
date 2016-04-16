'use strict';

var PageView = require('../framework/page');

var ServiceScreen = PageView.extend({

  id: 'servicesList',

  template: require('../../templates/pages/servicesList.hbs'),

  buttonEvents: {
    left: 'goToHome',
    right: 'goToServiceSelected'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  goToServiceSelected: function() {
    window.App.navigate('serviceSelected');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new ServiceScreen();
