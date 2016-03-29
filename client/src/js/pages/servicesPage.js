'use strict';

var PageView = require('../framework/page');

var ServicesScreen = PageView.extend({

  id: 'services',

  template: require('../../templates/pages/services.hbs'),

  buttonEvents: {
    left: 'goToServicesList'
  },

  goToServicesList: function() {
    window.App.navigate('serviceslist');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new ServicesScreen();
