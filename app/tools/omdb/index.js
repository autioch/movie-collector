const bluebird = require('bluebird');
const request = require('./request');
const { progressBar } = require('../../utils');

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
 * @param  {Array} videos Array of videos to update.
 * @param  {Object} config         Application config.
 * @return {Promise}              Promise resolving when all vidoes are updated.
 */
module.exports = function prepareOmdbData(videos, config) {
  const { omdbForce } = config;

  let videosToQuery = videos;

  if (!omdbForce) {
    videosToQuery = videos.filter(shouldQueryVideo);
  }

  const bar = progressBar('Query OMDB', videosToQuery.length);

  return bluebird
    .all(videosToQuery.map((video) => request(video).tap(() => bar.tick())));
    // .then(() => videos);
};
