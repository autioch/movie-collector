'use strict';

let _ = require('lodash');
let fs = require('fs');
let path = require('path');
let fileFactory = require('./file');

module.exports = function (rootPath, folderName) {
  let folderPath = path.join(rootPath, folderName);
  if (!fs.lstatSync(folderPath).isDirectory()) {
    return false;
  }
  return {
    name: folderName,
    files: _.compact(fs.readdirSync(folderPath).map(function (fileName) {
      return fileFactory(folderPath, fileName);
    })),
  };
};
