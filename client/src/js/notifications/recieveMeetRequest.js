'use strict';

var ViewWithButtons = require('../framework/viewWithButtons'),
  eventHub = require('../framework/eventHub');

var WatchNotification = ViewWithButtons.extend({

  initialize: function(opts) {
    this.message = opts && opts.message;
  },

  className: 'notification',

  template: require('../../templates/notifications/recieveMeetRequest.hbs'),

  buttonEvents: {
    right: 'accept',
    left: 'hide'
  },

  render: function() {

    this.$el.html(this.template({message: this.message}));

    // TODO make this configurable
    $('#watch-face').append(this.$el);

    this.configureButtons();
    return this;
  },

  hide: function() {
    eventHub.trigger('hideNotification');
  },

  accept: function(){
    window.App.navigate('meetingConfirmed');
  }

});

module.exports = WatchNotification;
