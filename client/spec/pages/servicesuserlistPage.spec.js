'use strict';

var servicesuserlistPage = require('../../src/js/pages/servicesuserlistPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Services user list Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the service list page', function() {
        spyOn(window.App, 'navigate');
        servicesuserlistPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('serviceslist');
      });
    });

    describe('left', function() {
      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        servicesuserlistPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      servicesuserlistPage.render();
      expect(servicesuserlistPage.$el).toContainHtml('Family Members');
    });
  });

});
