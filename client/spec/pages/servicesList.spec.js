'use strict';

var servicesList = require('../../src/js/pages/servicesList'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub'),
  ViewWithButtons = require('../../src/js/framework/viewWithButtons'),
  Menu = require('../../src/js/framework/menu'),
  PageView = require('../../src/js/framework/page');

window.App = App;

describe('The services list page', function() {

  describe('button event handlers', function() {

    describe('right', function() {
      it('should take the user to the service selected page', function() {
        spyOn(window.App, 'navigate');
        servicesList.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('serviceSelected');

      });
    });

    describe('left', function() {
      it('should navigate to home page', function() {
        spyOn(window.App, 'navigate');
        servicesList.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(servicesList.render()).toEqual(servicesList);
    });

  });

});
