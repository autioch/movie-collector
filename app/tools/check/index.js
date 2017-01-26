const { getTicker } = require('../../utils');
const workers = require('./workers');

/**
 * Checks videoData for missing or incoherent data.
 * @param  {Array} videos  Array of videoData to check.
 * @return {undefined} Nothing.
 */
module.exports = function prepareCheckData(videos) {
  const ticker = getTicker('Check data', 1);

  videos.forEach((video) => {
    video.errors = workers
      .reduce((errors, worker) => errors.concat(worker(video)), [])
      .filter((error) => !!error);
  });

  ticker();

  return videos;
};
