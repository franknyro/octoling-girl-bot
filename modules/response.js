'use strict'

const officeChannelId = require('./office-channel-id.js');

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
    // 開店作業
    if (msg.content === '!office') {
        if (officeChannelId.text) {
            if (msg.channel.id === textChannelId) {
                msg.channel.send('シゴト シテマス');
            }
        }
        else {
            officeChannelId.text = msg.channel.id;
            officeChannelId.voice = msg.member.voice.channel.id;
            msg.channel.send('オフィス ツカイマスネ？');
            msg.channel.send('\[オフィスkumasan\]');
            console.log('now opened!');
        }
    }

    if (msg.channel.id !== officeChannelId.text) {
        return;
    }

    // send reply
    if (msg.content.match(/<@!697530975722143915>/)) {
        msg.channel.send('ナンデスカ？');
        return;
    }

    const sendMessage = require('./send-message.js');
    sendMessage(msg);

    return;
};