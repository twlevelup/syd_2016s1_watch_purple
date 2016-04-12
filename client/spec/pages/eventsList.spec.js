'use strict';

var eventsList = require('../../src/js/pages/eventsList'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The events list', function() {

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(eventsList.render()).toEqual(eventsList);
    });

  });

});
