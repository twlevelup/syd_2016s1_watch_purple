'use strict';

var IdListPage = require('../../src/js/pages/idListPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The id list Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the id details page', function() {
        spyOn(window.App, 'navigate');
        IdListPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('idDetails');
      });
    });

    describe('left', function() {
      it('should take the user to the id user list page', function() {
        spyOn(window.App, 'navigate');
        IdListPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('idUserList');
      });
    });

  });


  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      IdListPage.render();
      expect(IdListPage.$el).toContainHtml('Services List');
    });
  });

});
