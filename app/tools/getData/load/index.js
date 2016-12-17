const fs = require('bluebird').promisifyAll(require('fs'));
const { progressBar, verbose } = require('../../../utils');

/**
 * Loads folderData from json.
 * @param  {Object} config Application config
 * @return {promise} Promise Resolves to folderData.
 */
module.exports = function loadFolderData(config) {
  verbose('TOOL LOAD', config.input);
  const bar = progressBar('Read data from json', 1);

  return fs
    .readFileAsync(config.input)
    .tap(() => verbose('TOOL LOAD', 'Read'))
    .then(JSON.parse)
    .tap(() => verbose('TOOL LOAD', 'Parsed'))
    .tap(() => bar.tick());
};
