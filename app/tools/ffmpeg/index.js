/* eslint no-process-env: 0 */
const path = require('path');
const probe = require('./probe');
const { getTicker } = require('../../utils');
const bluebird = require('bluebird');

const MAX_PROBES = 3;

/**
 * Extends each video found in folder and its subfolder with data from omdb.
 * @param  {Array} videos Array of videos to check.
 * @param  {Object} config        Application config
 * @return {Promise}              Promise resolving when all videos have been probed.
 */
module.exports = function ffmpeg(videos, config) {
  process.env.FFMPEG_PATH = path.join(config.ffmpeg, 'bin', 'ffmpeg.exe');
  process.env.FFPROBE_PATH = path.join(config.ffmpeg, 'bin', 'ffprobe.exe');

  let videosToQuery = videos;

  if (!config.ffmpegForce) {
    videosToQuery = videos.filter((video) => !video.ffmpeg || video.ffmpeg.error);
  }

  const ticker = getTicker('ffProbe', videosToQuery.length);

  return bluebird
    .map(videosToQuery, (video) => probe(video).tap(ticker), { concurrency: MAX_PROBES })
    .then(() => videos);
};
