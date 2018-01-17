const bluebird = require('bluebird');
const request = require('./request');
const { getTicker } = require('../../utils');

/**
 * Decides if video should be queried.
 * @param  {Object} videoData Object describing video.
 * @return {Boolean}          True if video should be queried, false otherwise.
 */
function shouldQueryVideo(videoData) {
  const { omdb } = videoData;

  return !omdb || omdb.error || Object.keys(omdb).length === 0;
}

/**
 * Extends each video found in folder and its subfolder with data from omdb.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function prepareOmdbData(videos, config) {
  if (!config.omdb) {
    return bluebird.resolve(videos);
  }
  const { omdbForce } = config;

  let videosToQuery = videos;

  if (!omdbForce) {
    videosToQuery = videos.filter(shouldQueryVideo);
  }

  const ticker = getTicker('Query OMDB', videosToQuery.length);

  return bluebird
    .map(videosToQuery, (video) => request(video).tap(ticker))
    .then(() => videos);
};
