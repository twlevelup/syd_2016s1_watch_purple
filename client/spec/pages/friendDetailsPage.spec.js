'use strict';

var friendDetailsPage = require('../../src/js/pages/friendDetailsPage'),
    eventHub = require('../../src/js/framework/eventHub');

describe('The Friend Details Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the friend request page', function() {
        spyOn(window.App, 'navigate');
        friendDetailsPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('friendRequest');
      });
    });

    describe('left', function() {
      it('should navigate to friend selection page', function() {
        spyOn(window.App, 'navigate');
        friendDetailsPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('friendsSelection');
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      friendDetailsPage.render();
      expect(friendDetailsPage.$el).toContainText('MEET UP');
    });

  });

});
