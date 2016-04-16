'use strict';

var meetingConfirmed = require('../../src/js/pages/meetingConfirmed'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The meetingConfirmed Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        meetingConfirmed.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        meetingConfirmed.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('right', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        meetingConfirmed.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('bottom', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        meetingConfirmed.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('top', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        meetingConfirmed.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(meetingConfirmed.render()).toEqual(meetingConfirmed);
    });

  });

});
