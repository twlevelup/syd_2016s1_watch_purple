'use strict';

var Page = require('../framework/page');

var FourOhFour = Page.extend({

  id: 'contacts',

  template: require('../../templates/pages/404.hbs'),

  buttonEvents: {
    right: 'goToHome',
    top: 'goToHome',
    bottom: 'goToHome',
    left: 'goToHome',
    face: 'goToHome'
  },

  initialize: function() {
    this.render();
  },

  goToHome: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new FourOhFour();
