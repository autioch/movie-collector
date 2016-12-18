const fs = require('bluebird').promisifyAll(require('fs'));

/**
 * Saves data as a json, then returns the data.
 * @param  {String} fileName     [description]
 * @param  {mixed} fileContents [description]
 * @return {mixed}              [description]
 */
module.exports = function saveJson(fileName, fileContents) {
  return fs
    .writeFileAsync(fileName, JSON.stringify(fileContents, null, '  '))
    .then(() => fileContents);
};
