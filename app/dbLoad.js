'use strict';

let fs = require('fs');

module.exports = function (fileName) {
  try {
    return JSON.parse(fs.readFileSync(`./database/${fileName}.json`).toString());
  } catch (e) {
    return false;
  }
};
