const fs = require('fs');

module.exports = function setTextId(text) {
    fs.writeFileSync("./logs/text.txt", text);
}