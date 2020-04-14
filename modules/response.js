'use strict'

const sendMessage = require('./generate-message.js');

module.exports = (msg) => {
    // タコガール宛のメンションに返信する
    if (msg.content.match(/<@!697530975722143915>/)) {
        msg.reply('ナンデスカ？');
        return;
    }
    // それ以外のメンションは無視する
    if (msg.content.match(/<@!/)) {
        return;
    }

    sendMessage(msg);

};