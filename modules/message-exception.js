'use strict'

const getTextId = require('./get-text-id.js');

module.exports = (msg) => {
    if (msg.author.bot) {
        return true;
    }
    if (msg.channel.type === 'dm') {
        return true;
    }
    // チャットの送信者がボイスチャンネルにいない場合を除外
    if (!msg.member.voice.channel) {
        return true;
    }
    // テキストチャンネルと同名のボイスチャンネルにいない場合を除外
    if (msg.channel.name.toLowerCase() !== msg.member.voice.channel.name.toLowerCase()) {
        return true;
    }
    // オフィス化したチャンネルがあるときは、そのチャンネル以外のチャットを無視
    if (getTextId()) {
        if (msg.channel.id !== getTextId()) {
            return true;
        }
    }

    return false;
}