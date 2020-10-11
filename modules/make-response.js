'use strict'

const generateMessageTo = require('./generate-message.js');

module.exports = (msg, client) => {
    // タコガール宛のメンションに返信する
    if (msg.content.match(/<@!697530975722143915>/)) {
        const atMarkAuthor = `${msg.author}` + ' ';
        let text = atMarkAuthor + 'ナンデスカ？';
        msg.channel.send(text);
        return;
    }
    // それ以外のメンションは無視する
    if (msg.content.match(/<@!/)) {
        return;
    }
    // ワードセットにマッチしたら返答を生成
    const text = generateMessageTo(msg);
    if (text) {
        msg.channel.send(text);
    }
};