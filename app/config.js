'use strict';

let fs = require('fs');

module.exports = Object.freeze(JSON.parse(fs.readFileSync('./config.json')));
