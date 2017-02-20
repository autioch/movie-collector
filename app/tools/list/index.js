const path = require('path');
const bluebird = require('bluebird');
const parse = require('./parse');
const { getTicker, saveJson } = require('../../utils');

/**
 * Generates a web app for browsing videos.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function listData(videos, config) {
  if (!config.outputList) {
    return bluebird.resolve(videos);
  }

  const ticker = getTicker('Save list', 1);

  return saveJson(path.join(config.outputPath, 'list', 'data.json'), videos.map(parse))
    .tap(ticker)
    .then(() => videos);
};
