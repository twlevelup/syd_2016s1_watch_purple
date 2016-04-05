'use strict';

var friendsPage = require('../../src/js/pages/friendsPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Friends Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to events page', function() {
        spyOn(window.App, 'navigate');
        friendsPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(friendsPage.render()).toEqual(friendsPage);
    });

  });

});
