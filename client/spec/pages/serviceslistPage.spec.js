'use strict';

var serviceslistPage = require('../../src/js/pages/serviceslistPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Services list Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the service page', function() {
        spyOn(window.App, 'navigate');
        serviceslistPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('services');
      });
    });

    describe('left', function() {
      it('should take the user to the servicesuserlist page', function() {
        spyOn(window.App, 'navigate');
        serviceslistPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('servicesuserlist');
      });
    });

  });


  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      serviceslistPage.render();
      expect(serviceslistPage.$el).toContainHtml('Services List');
    });
  });

});
