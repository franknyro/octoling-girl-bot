'use strict'

const officeChannelId = require('./office-channel-id.js');

module.exports = (deletedChannel) => {
    if (deletedChannel.id === officeChannelId.text) {
        officeChannelId.text = null;
        officeChannelId.voice = null;
        console.log('closed!');
    }
    return;
};