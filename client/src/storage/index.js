'use strict';

var eventsData = require("json!./events.json");
var serviceSelectedData = require("json!./serviceSelected.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);

  this.serviceSelectedData = new Backbone.Collection();
  this.serviceSelectedData.add(serviceSelectedData.serviceSelected);
}

module.exports = new Storage();
