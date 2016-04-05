'use strict';

var eventsPage = require('../../src/js/pages/eventsPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The events Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        eventsPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(eventsPage.render()).toEqual(eventsPage);
    });

  });

});
