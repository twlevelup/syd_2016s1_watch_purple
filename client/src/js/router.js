'use strict';

// var BaseRouter = require('./framework/router');

var Router = Backbone.Router.extend({

  routes: {
    'idList/:id': 'showIdDetails',
    'eventDetails/:id': 'showEventDetails',
    'serviceDetails/:id': 'showServiceSelected',
    'friendDetails/:id': 'showFriendsDetails',
    '*other': 'defaultRoute',
  },

  initialize: function(pages) {
    this.pages = pages;
    // TODO call initialize on the parent router
    // this.prototype.initialize();
    // TODO merge routes with default routes
    // this.routes = _.merge(this.prototype.defaultRoutes);
  },

  defaultRoute: function (urlFragment) {
    var pageName = (!urlFragment) ? 'home' : urlFragment;
    var page = this.pages[pageName] || this.pages['404'];
    window.App.showPage(page);
  },

  showEventDetails: function(id) {
    window.App.showPage(this.pages.eventDetails, {cid: id});
  },

  showServiceSelected: function(id){
    window.App.showPage(this.pages.serviceSelected, {cid: id});
  },

  showFriendsDetails: function(id) {
    window.App.showPage(this.pages.friendDetails, {cid: id});
  },

  showIdDetails: function(id) {
    window.App.showPage(this.pages.idList, {cid: id});
  }

});

module.exports = Router;
