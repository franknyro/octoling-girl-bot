'use strict'

const getTextId = require('./get-text-id.js');
const setTextId = require('./set-text-id.js');
const getVoiceId = require('./get-voice-id.js');
const setVoiceId = require('./set-voice-id.js');

module.exports = (deletedChannel) => {
    if (deletedChannel.id === getTextId()) {
        setTextId('');
        setVoiceId('');
        console.log('closed!');
    }
};