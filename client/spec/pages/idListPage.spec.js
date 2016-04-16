'use strict';

var IdListPage = require('../../src/js/pages/idListPage'),
    storage = require('../../src/storage'),
    eventHub = require('../../src/js/framework/eventHub');

    describe('The ID details page', function() {

      describe('a new ID details page', function() {
        it('should load the IDs data', function() {
          // FIXME this is crap, data should be passed in to the constructor for the page
          expect(IdListPage.data).toEqual(storage.idsData);
        });
      });

      describe('getUserData', function() {

        var cid;

        beforeEach(function() {
          IdListPage.data = new Backbone.Collection({
            "names": "Abdul",
            "services": [
              {"name": "Medicare", "id": "2111111"},
              {"name": "Healthcare Card", "id":"3553455"}
            ]
          });
          cid = IdListPage.data.last().cid;
        });

        it('should return the correct model from the eventsData collection', function() {
          IdListPage.options = {cid: cid};
          expect(IdListPage.getUserData().toJSON()).toEqual({
            "names": "Abdul",
            "services": [
              {"name": "Medicare", "id": "2111111"},
              {"name": "Healthcare Card", "id":"3553455"}
            ]
          });
        });

      });

      describe('button events', function() {

        beforeEach(function() {
          IdListPage.configureButtons();
        });

        describe('top', function() {
          it('should scroll the watch face up', function() {
            spyOn(IdListPage, 'scrollUp');
            IdListPage.configureButtons();
            eventHub.trigger('top');
            expect(IdListPage.scrollUp).toHaveBeenCalled();
          });
        });

        describe('bottom', function() {
          it('should scroll the watch face down', function() {
            spyOn(IdListPage, 'scrollDown');
            IdListPage.configureButtons();
            eventHub.trigger('bottom');
            expect(IdListPage.scrollDown).toHaveBeenCalled();
          });
        });

        describe('face', function() {
          it('should navigate to home page', function() {
            spyOn(window.App, 'navigate');
            IdListPage.configureButtons();
            eventHub.trigger('face');
            expect(window.App.navigate).toHaveBeenCalledWith('');
          });
        });

      });

      describe('rendering', function() {

        it('should render each of the contacts', function() {
          spyOn(IdListPage, 'createServiceHTML');
          IdListPage.render();
          expect(IdListPage.createServiceHTML.calls.count()).toEqual(2);
        });

        it('returns the view object', function() {
          expect(IdListPage.render()).toEqual(IdListPage);
        });

      });

    });
