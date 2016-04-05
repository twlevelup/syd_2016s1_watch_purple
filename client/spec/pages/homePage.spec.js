'use strict';

var homePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Home Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the friends page', function() {
        spyOn(window.App, 'navigate');
        homePage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('friends');
      });
    });

    describe('top', function() {
      it('should take the user to the services page', function() {
        spyOn(window.App, 'navigate');
        homePage.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('services');
      });
    });

    describe('bottom', function() {
      it('should take the user to the id page', function() {
        spyOn(window.App, 'navigate');
        homePage.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('id');
      });
    });

    describe('left', function() {
      it('should navigate to events page', function() {
        spyOn(window.App, 'navigate');
        homePage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('events');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
