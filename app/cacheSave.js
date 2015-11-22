'use strict';

let fs = require('fs');

module.exports = function (fileName, data) {
  let stringified = JSON.stringify(data, null, '  ');
  let file = `./cache/${fileName}.json`;
  fs.writeFile(file, stringified);
};
