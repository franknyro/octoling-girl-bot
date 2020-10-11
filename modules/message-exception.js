'use strict'

const textId = process.env.TEXT_ID;

module.exports = (msg) => {
    // DM を除外
    if (msg.channel.type === 'dm') {
        return false;
    }
    // bot からのチャットを除外
    if (msg.author.bot) {
        return false;
    }
    // オフィスチャンネル以外のチャットを無視
    if (msg.channel.id !== textId) {
        return false;
    }
    // チャットの送信者がボイスチャンネルにいない場合を除外
    if (!msg.member.voice.channel) {
        return false;
    }
    // テキストチャンネルと同名のボイスチャンネルにいない場合を除外
    if (msg.channel.name.toLowerCase() !== msg.member.voice.channel.name.toLowerCase()) {
        return false;
    }

    return true;
}