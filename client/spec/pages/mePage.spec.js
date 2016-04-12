'use strict';

var mePage = require('../../src/js/pages/mePage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The me Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        mePage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        mePage.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(mePage.render()).toEqual(mePage);
    });

  });

});
