'use strict'

const sendMessage = require('./generate-message.js');
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
    if (msg.channel.id !== getTextId()) {
        return;
    }

    // reply
    if (msg.content.match(/<@!697530975722143915>/)) {
        msg.reply('ナンデスカ？');
        return;
    }

    sendMessage(msg);

};