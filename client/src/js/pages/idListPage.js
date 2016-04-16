'use strict';

var Page = require('../framework/page'),
IdServiceView = require('../views/idservice');


var IdListScreen = Page.extend({

  id: 'idList',
  data: require('../../storage').idsData,
  template: require('../../templates/pages/idList.hbs'),

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

  getUserData: function() {
    return this.data.get(this.options.cid);
  },

  render: function() {
    var details = this.getUserData().toJSON();
    var servicesHTML = document.createDocumentFragment();

    this.$el.html(this.template(details));

    details.services.forEach(function(service) {

      $(servicesHTML).append(this.createServiceHTML(service));
    }, this);

    this.$el.find('ul').html(servicesHTML);

    return this;
  },

  createServiceHTML: function(idservice) {
      var view = new IdServiceView({
        model: idservice
      });
      return view.render().el;
    }

});

module.exports = new IdListScreen();
