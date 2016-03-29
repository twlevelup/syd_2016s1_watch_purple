'use strict';

var PageView = require('../framework/page');

var ServicesScreen = PageView.extend({

  id: 'serviceslist',

  template: require('../../templates/pages/serviceslist.hbs'),

  buttonEvents: {
    right: 'goToServices',
    left: 'goToServicesUserList'
  },

  goToServices: function() {
    window.App.navigate('services');
  },

  goToServicesUserList: function() {
    window.App.navigate('servicesuserlist');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new ServicesScreen();
