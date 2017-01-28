/* eslint no-process-env: 0 */
const path = require('path');
const probe = require('./probe');
const { getTicker } = require('../../utils');
const bluebird = require('bluebird');

const MAX_PROBES = 3;

/**
 * Extends each video with data probed using ffmpeg.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function ffmpeg(videos, config) {
  if (!config.ffmpeg) {
    return bluebird.resolve(videos);
  }

  /* Fluent ffmpeg requires these. */
  process.env.FFMPEG_PATH = path.join(config.ffmpeg, 'bin', 'ffmpeg.exe');
  process.env.FFPROBE_PATH = path.join(config.ffmpeg, 'bin', 'ffprobe.exe');

  let videosToQuery = videos;

  if (!config.ffmpegForce) {
    videosToQuery = videos.filter((video) => !video.ffmpeg || video.ffmpeg.error);
  }

  const ticker = getTicker('ffProbe', videosToQuery.length);

  return bluebird
    .map(videosToQuery, (video) => probe(video).tap(ticker), {
      concurrency: MAX_PROBES
    })
    .then(() => videos);
};
