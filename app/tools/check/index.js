const { progressBar } = require('../../utils');
const flattenDeep = require('lodash.flattendeep');
const workers = require('./workers');

/**
 * Checks videoData for missing or incoherent data.
 * @param  {Array} videos  Array of videoData to check.
 * @return {undefined} Nothing.
 */
module.exports = function prepareCheckData(videos) {
  const bar = progressBar('Check data', 1);

  videos.forEach((video) => {
    video.errors = flattenDeep(workers.map((worker) => worker(video))).filter((error) => !!error);
  });
  bar.tick();

  return videos;
};
