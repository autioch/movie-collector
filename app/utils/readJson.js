const fs = require('bluebird').promisifyAll(require('fs'));

/**
 * Loads videoDataArray from json.
 * @param  {String} fileName Full path to the json to read
 * @return {promise} Promise resolving to contents of the file.
 */
module.exports = function readJson(fileName) {
  return fs
    .readFileAsync(fileName)
    .then(JSON.parse);
};
