'use strict';

var IDServiceView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/idservice.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {

    this.$el.html(this.template(this.model));
    return this;
  }

});

module.exports = IDServiceView;
