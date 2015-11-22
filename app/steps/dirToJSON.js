'use strict';

let fs = require('fs');
let _ = require('lodash');
let folderFactory = requireFrom('app/factories/folder');

module.exports = function (rootPath, callback) {

  fs.stat(rootPath, function (err, stats) {
    if (err) {
      return callback(err);
    }
    if (!stats.isDirectory()) {
      return callback(`${rootPath} is not a directory.`);
    }
    fs.readdir(rootPath, function (err, filesArray) {
      if (err) {
        return callback(err);
      }
      callback(null, _.compact(filesArray.map(function (folderName) {
        return folderFactory(rootPath, folderName);
      })));
    });
  });
};
