'use strict';

var WatchNotification = require('../../src/js/notifications/recieveMeetRequest'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = require('../../src/js/app');

describe('Meet Request Notif testing', function() {

  var watchNotification;

  beforeEach(function() {
    watchNotification = new WatchNotification({message: 'foo'});
    setFixtures('<div id="watch-face" />');
  });
  describe('button event handlers', function() {

    describe('right', function() {
      it('should navigate to confirmation page', function() {
        spyOn(window.App, 'navigate');
        watchNotification.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('meetingConfirmed');
      });
    });
  });

  describe('Rendering', function() {

    it('should append itself to the view for the current page', function() {
      watchNotification.render();
      var watchFace = $('#watch-face');
      expect(watchFace).toContainElement('div');
    });

    it('should display the message', function() {
      watchNotification.render();
      var watchFace = $('#watch-face');
      expect(watchFace.text()).toContain('foo');
    });

    it('should have the class watchNotification', function() {
      expect(watchNotification.className).toEqual('notification');
    });

    it('should return the view object', function() {
      expect(watchNotification.render()).toEqual(watchNotification);
    });

  });

});
