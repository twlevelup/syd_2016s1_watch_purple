'use strict';

var eventsList = require('../../src/js/pages/eventsList'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub'),
  ViewWithButtons = require('../../src/js/framework/viewWithButtons'),
  Menu = require('../../src/js/framework/menu'),
  PageView = require('../../src/js/framework/page');

window.App = App;

describe('The events list', function() {

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(eventsList.render()).toEqual(eventsList);
    });

  });

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the event details page', function() {
        spyOn(window.App, 'navigate');
        eventsList.configureButtons();
        eventHub.trigger('right');

        expect(window.App.navigate).toHaveBeenCalledWith('eventDetails/c1');

      });
    });

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(eventsList, 'back');
        eventsList.configureButtons();
        eventHub.trigger('left');
        expect(eventsList.back).toHaveBeenCalled();
      });
    });

  });

});
