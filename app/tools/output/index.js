const { getTicker, saveJson } = require('../../utils');
const bluebird = require('bluebird');
const path = require('path');

/**
 * Saves json with videos array.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
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
