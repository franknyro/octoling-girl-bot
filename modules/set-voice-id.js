const fs = require('fs');

module.exports = function setVoiceId(text) {
    fs.writeFileSync("./logs/voice.txt", text);
}