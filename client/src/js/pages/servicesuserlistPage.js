'use strict';

var PageView = require('../framework/page');

var ServicesuserlistScreen = PageView.extend({

  id: 'servicesuserlist',

  template: require('../../templates/pages/servicesuserlist.hbs'),

  buttonEvents: {
    right: 'goToServicesList',
    left: 'goToHomePage'
  },

  goToServicesList: function() {
    window.App.navigate('serviceslist');
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new ServicesuserlistScreen();
