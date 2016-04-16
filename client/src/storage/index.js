'use strict';

var eventsData = require("json!./events.json"),
serviceSelectedData = require("json!./serviceSelected.json"),
friendsData = require("json!./friends.json"),
idsData = require("json!./ids.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);

  this.serviceSelectedData = new Backbone.Collection();
  this.serviceSelectedData.add(serviceSelectedData.serviceSelected);

  this.friendsData = new Backbone.Collection();
  this.friendsData.add(friendsData.friends);
  this.idsData = new Backbone.Collection();
  this.idsData.add(idsData.ids);
}

module.exports = new Storage();
