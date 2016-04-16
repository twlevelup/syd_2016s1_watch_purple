'use strict';

var serviceSelected = require('../../src/js/pages/serviceSelected'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub'),
  ViewWithButtons = require('../../src/js/framework/viewWithButtons'),
  Menu = require('../../src/js/framework/menu'),
  PageView = require('../../src/js/framework/page');

window.App = App;

describe('The services selected page', function() {

  describe('button event handlers', function() {

    // describe('right', function() {
    //   it('should take the user to the service details page', function() {
    //     spyOn(window.App, 'navigate');
    //     serviceSelected.configureButtons();
    //     eventHub.trigger('right');

    //     expect(window.App.navigate).toHaveBeenCalledWith('serviceSelected/c5');

    //   });
    // });

    describe('left', function() {
      it('should navigate to previous page', function() {
        spyOn(serviceSelected, 'back');
        serviceSelected.configureButtons();
        eventHub.trigger('left');
        expect(serviceSelected.back).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(serviceSelected.render()).toEqual(serviceSelected);
    });

  });

});
