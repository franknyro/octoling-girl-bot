'use strict'

const getTextId = require('./get-text-id.js');
const setTextId = require('./set-text-id.js');
const setVoiceId = require('./set-voice-id.js');

module.exports = (msg) => {
    if (msg.content === '!office') {
        if (getTextId()) {
            if (msg.channel.id === getTextId()) {
                msg.channel.send('シゴト シテマス');
            }
        }
        else {
            setTextId(msg.channel.id);
            setVoiceId(msg.member.voice.channel.id);
            msg.channel.send('オフィス ツカイマスネ？');
            console.log('now opened!');
        }
    }
};