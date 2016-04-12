'use strict';

var friendRequestPage = require('../../src/js/pages/friendRequestPage'),
    eventHub = require('../../src/js/framework/eventHub');

describe('The Friend Request Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to friend details page', function() {
        spyOn(window.App, 'navigate');
        friendRequestPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('friendDetails');
      });
    });

    describe('right', function() {
      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        friendRequestPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        friendRequestPage.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      friendRequestPage.render();
      expect(friendRequestPage.$el).toContainText('Friend Request');
    });

  });

});
