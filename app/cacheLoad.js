'use strict';

let fs = require('fs');

module.exports = function (fileName) {
  /* TODO add check if file exists, attempt to load, and return false on fail*/
  let file = `./cache/${fileName}.json`;
  let stringified = fs.readFileSync(file);
  return JSON.parse(stringified);
};
