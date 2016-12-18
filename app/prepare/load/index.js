const fs = require('bluebird').promisifyAll(require('fs'));
const { progressBar } = require('../../utils');

/**
 * Loads videoDataArray from json.
 * @param  {Object} config Application config
 * @return {promise} Promise Resolves to videoDataArray.
 */
module.exports = function loadData(config) {
  const { input } = config;

  const bar = progressBar('Read data from json', 1);

  return fs
    .readFileAsync(input)
    .then(JSON.parse)
    .tap(() => bar.tick());
};
