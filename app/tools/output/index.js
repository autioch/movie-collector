const { getTicker, saveJson } = require('../../utils');
const bluebird = require('bluebird');
const path = require('path');

/**
 * Saves scan output to file for later reuse insted of another scan.
 * @param  {Object} videos     Array of video data.
 * @param  {Object} config     Application config
 * @return {Promise}           Promise resolving when data is saved.
 */
module.exports = function outputData(videos, config) {
  if (!config.outputData) {
    return bluebird.resolve(videos);
  }

  const ticker = getTicker('Save data', 1);

  return saveJson(path.join(config.outputPath, 'data.json'), videos)
    .tap(ticker)
    .then(() => videos);
};
