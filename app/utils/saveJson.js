const fs = require('bluebird').promisifyAll(require('fs'));
const { minify } = require('../config');

const stringifier = minify ? (contents) => JSON.stringify(contents) : (contents) => JSON.stringify(contents, null, '  ');

/**
 * Saves data as a json, then returns the data.
 * @param  {String} fileName     [description]
 * @param  {mixed} fileContents [description]
 * @return {mixed}              [description]
 */
module.exports = function saveJson(fileName, fileContents) {
  return fs
    .writeFileAsync(fileName, stringifier(fileContents), 'utf8')
    .then(() => fileContents);
};
