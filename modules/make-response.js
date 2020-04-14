'use strict'

const generateMessageTo = require('./generate-message.js');

module.exports = (msg) => {
    // タコガール宛のメンションに返信する
    if (msg.content.match(/<@!697530975722143915>/)) {
        const atMarkAuthor = `${msg.author}` + ' ';
        let text;
        if (msg.content.match(/開店/)) {
            text = atMarkAuthor + 'キョウモ イチニチ ガンバリマショ';
        }
        else if (msg.content.match(/閉店/)) {
            text = atMarkAuthor + 'キョウモ イチニチ オツカレサマデスネ？';
        }
        else {
            text = atMarkAuthor + 'ナンデスカ？';
        }
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