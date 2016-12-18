/* eslint no-process-env: 0 */
const path = require('path');
const probeVideo = require('./probeVideo');
const { progressBar } = require('../../utils');
const bluebird = require('bluebird');

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

  const bar = progressBar('ffProbe', videosToQuery.length);

  return bluebird
    .all(videosToQuery.map((video) => probeVideo(video).tap(() => bar.tick())))
    .then(() => videos);
};
