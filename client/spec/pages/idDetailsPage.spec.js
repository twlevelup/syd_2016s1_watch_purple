'use strict';

var idDetailsPage = require('../../src/js/pages/idDetailsPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Id Details Page', function() {

  describe('button event handlers', function() {

    describe('left', function() {
      it('should take the user to the id list page', function() {
        spyOn(window.App, 'navigate');
        idDetailsPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('idList');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(idDetailsPage.render()).toEqual(idDetailsPage);
    });

    it('should produce the correct HTML', function() {
      idDetailsPage.render();
      expect(idDetailsPage.$el).toContainHtml('MEDICARE');
    });
  });

});
