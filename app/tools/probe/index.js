/* eslint no-process-env: 0 */
const path = require('path');
const probeVideo = require('./probeVideo');
const { progressBar, verbose } = require('../../utils');
const bluebird = require('bluebird');

/**
 * Extends each video found in folder and its subfolder with data from omdb.
 * @param  {Object} config        Application config
 * @param  {Array} videoDataArray Array of videos to check.
 * @return {Promise}              Promise resolving when all videos have been probed.
 */
module.exports = function ffProbe(config, videoDataArray) {
  if (!config.ffmpeg) {
    verbose('TOOL PROBE', 'Disabled');

    return;
  }

  process.env.FFMPEG_PATH = path.join(config.ffmpeg, 'bin', 'ffmpeg.exe');
  process.env.FFPROBE_PATH = path.join(config.ffmpeg, 'bin', 'ffprobe.exe');

  let videosToQuery = videoDataArray;

  if (!config.ffmpegForce) {
    videosToQuery = videoDataArray.filter((videoData) => !videoData.ffmpeg || videoData.ffmpeg.error);
  }

  const bar = progressBar('ffProbe', videosToQuery.length);

  verbose('TOOL PROBE', `${videosToQuery.length} probes`);

  return bluebird
    .all(videosToQuery
      .map((videoData) => probeVideo(videoData).tap(() => bar.tick()), { concurrency: 4 })
    )
    .tap(() => verbose('TOOL PROBE', 'Done'));
};
