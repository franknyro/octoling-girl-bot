const fs = require('fs');

module.exports = function getVoiceId() {
    return fs.readFileSync('./logs/voice.txt', 'utf-8');
}