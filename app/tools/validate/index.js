const path = require('path');
const workers = require('./workers');
const Bluebird = require('bluebird');
const { getTicker, saveJson } = require('../../utils');

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
  let steps = 1;

  if (config.outputErrors) {
    steps++;
  }
  const ticker = getTicker('Check data', steps);

  videos.forEach((video) => {
    video.errors = workers
      .reduce((errors, worker) => errors.concat(worker(video)), [])
      .filter((error) => !!error);
  });

  ticker();

  if (config.outputErrors) {
    const errors = videos
    .filter((video) => video.errors.length > 0)
    .map((video) => ({
      year: video.year,
      title: video.title,
      errors: video.errors
    }));

    return saveJson(path.join(config.outputPath, 'errors.json'), errors)
      .tap(ticker)
      .then(() => videos);
  }

  return videos;
};
