'use strict';

var PageView = require('../framework/page');

var IdListScreen = PageView.extend({

  id: 'idList',

  template: require('../../templates/pages/idList.hbs'),

  buttonEvents: {
    right: 'goToIdDetails',
    left: 'goToIdUserList'
  },

  goToIdDetails: function() {
    window.App.navigate('idDetails');
  },

  goToIdUserList: function() {
    window.App.navigate('idUserList');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new IdListScreen();
