'use strict'

const getTextId = require('./get-text-id.js');
const setTextId = require('./set-text-id.js');
const getVoiceId = require('./get-voice-id.js');
const setVoiceId = require('./set-voice-id.js');

module.exports = (msg) => {
    if (msg.author.bot) {
        return;
    }
    if (msg.channel.type === 'dm') {
        return;
    }
    // チャットの送信者がボイスチャンネルにいない場合を除外
    if (!msg.member.voice.channel) {
        return;
    }
    // テキストチャンネルと同名のボイスチャンネルにいない場合を除外
    if (msg.channel.name.toLowerCase() !== msg.member.voice.channel.name.toLowerCase()) {
        return;
    }

    if (msg.content === '!office') {
        if (getTextId() === '') {
            setTextId(msg.channel.id);
            setVoiceId(msg.member.voice.channel.id);
            msg.channel.send('オフィス ツカイマスネ？');
            msg.channel.send('\[オフィスkumasan\]');
            console.log('now opened!');
        }
        else {
            if (msg.channel.id === getTextId()) {
                msg.channel.send('シゴト シテマス');
            }
        }
    }
};