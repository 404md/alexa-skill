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
        this.emit(':tell', 'I declare <break time="1ms"/> <say-as interpret-as="characters">404</say-as> Not Found <phoneme alphabet="ipa" ph="mɔlˈdoʊ.və">Moldova</phoneme> <break time="1ms"/> officially opened!');
    }
};
