'use strict';

var PageView = require('../framework/page');

var MeetingConfirmedSceen = PageView.extend({

  id: 'meetingConfirmed',

  template: require('../../templates/pages/meetingConfirmed.hbs'),

  buttonEvents: {
    right: 'goToHome',
    top: 'goToHome',
    bottom: 'goToHome',
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

module.exports = new MeetingConfirmedSceen();
