'use strict';

var aboutPage = require('../../src/js/pages/aboutPage');
describe('The About Page', function() {

  /*describe('button event handlers', function () {

    describe('left', function() {


    });

  }); */

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      aboutPage.render();
      expect(aboutPage.$el).toContainText('Hello Jacqueline');
    });

  });

});
