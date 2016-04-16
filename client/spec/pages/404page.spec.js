'use strict';

var FourOhFour = require('../../src/js/pages/404Page'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The FourOhFour Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        FourOhFour.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        FourOhFour.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('right', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        FourOhFour.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('bottom', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        FourOhFour.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('top', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        FourOhFour.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(FourOhFour.render()).toEqual(FourOhFour);
    });

  });

});
