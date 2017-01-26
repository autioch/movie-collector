const { getTicker, saveJson } = require('../../utils');

/**
 * Saves scan output to file for later reuse insted of another scan.
 * @param  {Object} videos     Array of video data.
 * @param  {Object} config     Application config
 * @return {Promise}           Promise resolving when data is saved.
 */
module.exports = function outputData(videos, config) {
  const { output } = config;

  const ticker = getTicker('Save data', 1);

  return saveJson(output, videos)
    .tap(ticker)
    .then(() => videos);
};
