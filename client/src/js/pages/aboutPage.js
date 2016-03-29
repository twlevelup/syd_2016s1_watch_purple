'use strict';

var PageView = require('../framework/page');

var AboutScreen = PageView.extend({

  id: 'about',

  template: require('../../templates/pages/about.hbs'),

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new AboutScreen();
