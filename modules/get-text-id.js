const fs = require('fs');

module.exports = function getTextId() {
    return fs.readFileSync('./logs/text.txt', 'utf-8');
}