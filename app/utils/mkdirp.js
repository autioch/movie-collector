const path = require('path');
const fs = require('fs');
const bluebird = require('bluebird');

function createFolder(folderPath, callback) {
  fs.mkdir(folderPath, function(err) {
    if (!err) {
      return callback();
    }
    if (err.code === 'EEXIST') {
      return callback();
    }
    if (err.code !== 'ENOENT') {
      return callback(err);
    }
    /* Try creating parent folder. */
    createFolder(path.dirname(folderPath), function(err) {
      if (err) {
        callback(err);
      } else {
        /* Then try again. */
        createFolder(folderPath, callback);
      }
    });
  });
}


module.exports = function mkdrip(folderPath) {
  return new bluebird(function(resolve, reject) {
    createFolder(path.resolve(folderPath), function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
