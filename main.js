'use strict'

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.OCTOLING_GIRL_BOT_TOKEN;
const textId = process.env.TEXT_ID;

const makeResponseTo = require('./modules/make-response.js');
const isMessageException = require('./modules/message-exception.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (isMessageException(msg)) {
        makeResponseTo(msg, client);
    }
});

client.login(token);