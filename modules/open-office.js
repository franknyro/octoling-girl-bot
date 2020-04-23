'use strict'

const getTextId = require('./get-text-id.js');
const getVoiceId = require('./get-voice-id.js');
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
            msg.channel.fetch(getTextId())
                .then(channel => {
                    const name = channel.name;
                    channel.setName(name.replace(/_.*/i, '_オフィスKUMASAN'))
                        .then(console.log("changed text channel's name"))
                        .catch(console.error);
                })
                .catch(console.error);
            msg.channel.fetch(getVoiceId())
                .then(channel => {
                    const name = channel.name;
                    channel.setName(name.replace(/_.*/i, '_オフィスKUMASAN'))
                        .then(console.log("changed text channel's name"))
                        .catch(console.error);
                })
                .catch(console.error);
            console.log('now opened!');
        }
    }
};