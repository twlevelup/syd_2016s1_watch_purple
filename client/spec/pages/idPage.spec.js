'use strict';

var idPage = require('../../src/js/pages/idPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The id Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        idPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(idPage.render()).toEqual(idPage);
    });

  });

});
