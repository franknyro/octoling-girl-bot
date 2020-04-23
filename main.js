'use strict'

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.OCTOLING_GIRL_BOT_TOKEN;

const closeOfficeIfNeeded = require('./modules/close-office.js');
const openOfficeIfNeeded = require('./modules/open-office.js');
const makeResponseTo = require('./modules/make-response.js');
const getTextId = require('./modules/get-text-id.js');
const setTextId = require('./modules/set-text-id.js');
const setVoiceId = require('./modules/set-voice-id.js');
const isMessageException = require('./modules/message-exception.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // 前回終了時のチャンネルIDを復元
    // チャンネルが残っていればそのまま、残っていなければIDを消去
    client.channels.fetch(getTextId()).then(channel => {
        console.log(channel.name)
    })
    .catch(() => {
        setTextId('');
        setVoiceId('');
    });
});

client.on('channelDelete', deletedChannel => {
    closeOfficeIfNeeded(deletedChannel);
});

client.on('message', msg => {
    if (isMessageException(msg)) {
        return;
    }
    openOfficeIfNeeded(msg);
    makeResponseTo(msg);
});

client.login(token);