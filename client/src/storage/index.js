'use strict';

var eventsData = require("json!./events.json"),
friendsData = require("json!./friends.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
  this.friendsData = new Backbone.Collection();
  this.friendsData.add(friendsData.friends);
}

module.exports = new Storage();
