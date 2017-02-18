/* TODO Work in progress */
const bluebird = require('bluebird');
const request = require('./request');
const { getTicker } = require('../../utils');

const SUB_FORMAT = 'srt';

/**
 * Decides if video should be queried.
 * @param  {Object} videoData Object describing video.
 * @return {Boolean}          True if video should be queried, false otherwise.
 */
function shouldQueryVideo(videoData) {
  const { subs } = videoData;

  return !subs || subs.ext !== SUB_FORMAT || subs.error;
}

/**
 * Fetches subtitles from napiproject api.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function prepareNapiProject(videos, config) {
  if (!config.napiProject) {
    return bluebird.resolve(videos);
  }

  const videosToQuery = videos.filter(shouldQueryVideo);
  const ticker = getTicker('NapiProject', videosToQuery.length);

  return bluebird
    .map(videosToQuery, (video) => request(video).tap(ticker))
    .then(() => videos);
};
