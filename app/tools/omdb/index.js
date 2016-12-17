const bluebird = require('bluebird');
const request = require('./request');
const { progressBar, verbose } = require('../../utils');

/**
 * Decides if video should be queried.
 * @param  {Object} videoData Object describing video.
 * @return {Boolean}          True if video should be queried, false otherwise.
 */

function shouldQueryVideo(videoData) {
  return !videoData.omdb || videoData.omdb.error || Object.keys(videoData.omdb).length === 0;
}

/**
 * Extends each video found in folder and its subfolder with data from omdb.
 * @param  {Object} config         Application config.
 * @param  {Array} videoDataArray Array of videos to update.
 * @return {Promise}              Promise resolving when all vidoes are updated.
 */
module.exports = function omdb(config, videoDataArray) {
  if (!config.omdb) {
    verbose('TOOL OMDB', 'Disabled');

    return;
  }

  let videosToQuery = videoDataArray;

  if (!config.omdbForce) {
    videosToQuery = videoDataArray.filter(shouldQueryVideo);
  }

  const bar = progressBar('Query OMDB', videosToQuery.length);

  verbose('TOOL OMDB', `${videosToQuery.length} queries`);

  return bluebird
    .all(videosToQuery
      .map((videoData) => request(videoData)
        .tap(() => bar.tick())
      )
    )
    .tap(() => verbose('TOOL OMDB', 'Done'));
};
