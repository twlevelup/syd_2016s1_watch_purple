'use strict';

var page = require('../../src/js/pages/serviceDetails'),
  storage = require('../../src/storage'),
  eventHub = require('../../src/js/framework/eventHub');

describe('The service details page', function() {

  // describe('a new service details page', function() {
  //   it('should load the events data', function() {
  //     // FIXME this is crap, data should be passed in to the constructor for the page
  //     expect(page.data).toEqual(storage.eventsData);
  //   });
  // });

  // describe('getEventData', function() {

  //   var cid;

  //   beforeEach(function() {
  //     page.data = new Backbone.Collection({foo: 'getEventData'});
  //     cid = page.data.last().cid;
  //   });

  //   it('should return the correct model from the eventsData collection', function() {
  //     page.options = {cid: cid};
  //     expect(page.getEventData().toJSON()).toEqual({foo: 'getEventData'});
  //   });

  // });

  // describe('button events', function() {

  //   beforeEach(function() {
  //     page.configureButtons();
  //   });

  //   describe('top', function() {
  //     it('should scroll the watch face up', function() {
  //       spyOn(page, 'scrollUp');
  //       page.configureButtons();
  //       eventHub.trigger('top');
  //       expect(page.scrollUp).toHaveBeenCalled();
  //     });
  //   });

  //   describe('bottom', function() {
  //     it('should scroll the watch face down', function() {
  //       spyOn(page, 'scrollDown');
  //       page.configureButtons();
  //       eventHub.trigger('bottom');
  //       expect(page.scrollDown).toHaveBeenCalled();
  //     });
  //   });

  // });

  // describe('rendering', function() {

  //   var eventData = new Backbone.Model({
  //     name: 'event name',
  //     location: 'location'
  //   });

  //   beforeEach(function() {
  //     spyOn(page, 'getEventData').and.returnValue(eventData);
  //   });

  //   it('should have the correct title', function() {
  //     page.render();
  //     expect(page.$el).toContainHtml('event name');
  //   });

  //   it('should have the correct event description', function() {
  //     page.render();
  //     expect(page.$el).toContainHtml('location');
  //   });

  //   it('returns the view object', function() {
  //     expect(page.render()).toEqual(page);
  //   });

  // });

});
