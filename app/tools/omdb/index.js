const request = require('./request');
const progressBar = require('../../utils/progressBar');
const bluebird = require('bluebird');

function shouldQueryVideo(videoData) {
  return !videoData.omdb || videoData.omdb.error || Object.keys(videoData.omdb).length === 0;
}

/**
 * Extends each video found in folder and its subfolder with data from omdb.
 * @method omdb
 * @param  {object} folderData Object describing folder.
 * @return {promise} Promise Promise resolving when all queries are done.
 */
module.exports = function omdb(config, videoDataArray) {
  if (!config.omdb) {
    return;
  }

  const videosToQuery = config.omdbForce ? videoDataArray : videoDataArray.filter(shouldQueryVideo);
  const bar = progressBar('Query OMDB', videosToQuery.length);

  return bluebird.all(videosToQuery.map(videoData => request(videoData).tap(() => bar.tick())));
};
