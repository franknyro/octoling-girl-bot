'use strict'

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.OCTOLING_GIRL_BOT_TOKEN;

const closeOfficeIfNeeded = require('./modules/close-office.js');
const openOfficeIfNeeded = require('./modules/open-office.js');
const response = require('./modules/response.js');
const getTextId = require('./modules/get-text-id.js');
const setTextId = require('./modules/set-text-id.js');
const getVoiceId = require('./modules/get-voice-id.js');
const setVoiceId = require('./modules/set-voice-id.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
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
    openOfficeIfNeeded(msg);
    response(msg);
});

client.login(token);