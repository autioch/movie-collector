const path = require('path');
const fs = require('fs');
const Bluebird = require('bluebird');

/**
 * Recursively creates given folder Path
 * @param  {String}   folderPath Path to create.
 * @param  {Function} callback   Callback to fire when operation is complete.
 * @return {undefined}           Nothing.
 */

function createFolder(folderPath, callback) {
  fs.mkdir(folderPath, (err) => {
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
    createFolder(path.dirname(folderPath), (nestedErr) => {
      if (nestedErr) {
        return callback(nestedErr);
      }

      /* Then try again. */
      return createFolder(folderPath, callback);
    });
  });
}

/**
 * Recursively creates a folder path.
 * @param  {String} folderPath Path to create.
 * @return {Promise}           Promise resolving when path has been successfuly created.
 */
module.exports = function mkdrip(folderPath) {
  return new Bluebird((resolve, reject) => {
    createFolder(path.resolve(folderPath), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(folderPath);
      }
    });
  });
};
