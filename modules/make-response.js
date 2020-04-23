'use strict'

const getTextId = require('./get-text-id.js');
const getVoiceId = require('./get-voice-id.js');
const generateMessageTo = require('./generate-message.js');

module.exports = (msg) => {
    // タコガール宛のメンションに返信する
    if (msg.content.match(/<@!697530975722143915>/)) {
        const atMarkAuthor = `${msg.author}` + ' ';
        let text;
        if (msg.content.match(/開店/)) {
            text = atMarkAuthor + 'キョウモ イチニチ ガンバリマショ';
            client.channels.fetch(getTextId())
                .then(channel => {
                    const name = channel.name;
                    channel.setName(name.replace(/_.*/i, '_CLOSE|オフィスKUMASAN'))
                        .then(console.log("changed text channel's name"))
                        .catch(console.error);
                })
                .catch(console.error);
            client.channels.fetch(getVoiceId())
                .then(channel => {
                    const name = channel.name;
                    channel.setName(name.replace(/_.*/i, '_CLOSE|オフィスKUMASAN'))
                        .then(console.log("changed text channel's name"))
                        .catch(console.error);
                })
                .catch(console.error);
        }
        else if (msg.content.match(/閉店/)) {
            text = atMarkAuthor + 'キョウモ イチニチ オツカレサマデスネ？';
            msg.channel.fetch(getTextId())
                .then(channel => {
                    const name = channel.name;
                    channel.setName(name.replace(/_.*/i, '_CLOSE|オフィスKUMASAN'))
                        .then(console.log("changed text channel's name"))
                        .catch(console.error);
                })
                .catch(console.error);
            msg.channel.fetch(getVoiceId())
                .then(channel => {
                    const name = channel.name;
                    channel.setName(name.replace(/_.*/i, '_CLOSE|オフィスKUMASAN'))
                        .then(console.log("changed text channel's name"))
                        .catch(console.error);
                })
                .catch(console.error);
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