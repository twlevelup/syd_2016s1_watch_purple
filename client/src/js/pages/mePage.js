'use strict';

var PageView = require('../framework/page');

var MePage = PageView.extend({

  id: 'me',

  template: require('../../templates/pages/me.hbs'),

  buttonEvents: {
    left: 'goToHome',
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new MePage();
