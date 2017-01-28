const { getTicker } = require('../../utils');
const workers = require('./workers');
const Bluebird = require('bluebird');

/**
 * Validates video data, by checking missing fields and incoherent values.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function validate(videos, config) {
  if (!config.validate) {
    return Bluebird.resolve(videos);
  }
  const ticker = getTicker('Check data', 1);

  videos.forEach((video) => {
    video.errors = workers
      .reduce((errors, worker) => errors.concat(worker(video)), [])
      .filter((error) => !!error);
  });

  ticker();

  return videos;
};
