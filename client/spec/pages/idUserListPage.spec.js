'use strict';

var idUserListPage = require('../../src/js/pages/idUserListPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The id user list Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the id list page', function() {
        spyOn(window.App, 'navigate');
        idUserListPage.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalled();
      });
    });

    describe('left', function() {
      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        idUserListPage.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      idUserListPage.render();
      expect(idUserListPage.$el).toContainHtml(idUserListPage);
    });
  });

});
