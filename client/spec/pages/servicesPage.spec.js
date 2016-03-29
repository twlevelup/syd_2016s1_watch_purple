'use strict';

var servicesPage = require('../../src/js/pages/servicesPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Services Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should take the user to the serviceslist page', function() {
        spyOn(window.App, 'navigate');
        servicesPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('serviceslist');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(servicesPage.render()).toEqual(servicesPage);
    });

    it('should produce the correct HTML', function() {
      servicesPage.render();
      expect(servicesPage.$el).toContainHtml('MEDICARE');
    });
  });

});
