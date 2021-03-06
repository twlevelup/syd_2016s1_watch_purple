'use strict';

var Page = require('../framework/page');

var ServiceDetails = Page.extend({

  id: 'service-details',

  data: require('../../storage').eventsData,

  template: require('../../templates/pages/serviceDetails.hbs'),

  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'back'
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  getEventData: function() {
    return this.data.get(this.options.cid);
  },

  render: function() {
    // TODO if showPage was creataing a new instance of this view the model could be passed in
    var details = this.getEventData().toJSON();
    this.$el.html(this.template(details));
    return this;
  }

});

module.exports = new ServiceDetails();
