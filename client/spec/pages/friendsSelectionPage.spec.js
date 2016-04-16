'use strict';

var friendsSelectionPage = require('../../src/js/pages/friendsSelectionPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Friends Selection Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the friend details page', function() {
        spyOn(window.App, 'navigate');
        friendsSelectionPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('friendDetails');
      });
    });

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        friendsSelectionPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        friendsSelectionPage.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      friendsSelectionPage.render();
      expect(friendsSelectionPage.$el).toContainText('List of Friends');
    });

    it('returns the view object', function() {
      expect(friendsSelectionPage.render()).toEqual(friendsSelectionPage);
    });

  });

});
