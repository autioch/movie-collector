const progressBar = require('../../utils/progressBar');
const fs = require('bluebird').promisifyAll(require('fs'));

/**
 * Loads folderData from json.
 * @method loadFolderData
 * @param  {string} fileName Name of a file to read.
 * @return {promise} Promise Resolves to folderData.
 */
module.exports = function loadFolderData(fileName) {
  const bar = progressBar('Read data from json', 1);

  return fs
    .readFileAsync(fileName)
    .then(JSON.parse)
    .tap(() => bar.tick());
};
