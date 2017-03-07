'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('Open404md');
    },
    'IntentName': function () {
        this.emit('Open404md')
    },
    'Open404md': function () {
        this.emit(':tell', 'I declare Four Oh Four Moldova, officially opened!');
    }
};
