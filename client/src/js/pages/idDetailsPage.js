'use strict';

var PageView = require('../framework/page');

var IdDetailsScreen = PageView.extend({

  id: 'idDetails',

  template: require('../../templates/pages/idDetails.hbs'),

  buttonEvents: {
    left: 'goToIdList'
  },

  goToIdList: function() {
    window.App.navigate('idList');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new IdDetailsScreen();
