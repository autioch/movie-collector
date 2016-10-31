const path = require('path');
const probeVideo = require('./probeVideo');
const progressBar = require('../../utils/progressBar');
const bluebird = require('bluebird');


/**
 * Extends each video found in folder and its subfolder with data from omdb.
 * @method ffProbe
 * @param  {object} folderData Object describing folder.
 * @return {promise} Promise Promise resolving when all queries are done.
 */
module.exports = function ffProbe(config, videoDataArray) {
  if (!config.ffmpeg) {
    return;
  }

  process.env.FFMPEG_PATH = path.join(config.ffmpeg, 'bin', 'ffmpeg.exe');
  process.env.FFPROBE_PATH = path.join(config.ffmpeg, 'bin', 'ffprobe.exe');

  const videosToQuery = config.ffmpegForce ? videoDataArray : videoDataArray.filter(videoData => !videoData.ffmpeg);
  const bar = progressBar('ffProbe', videosToQuery.length);

  return bluebird.all(videosToQuery.map(videoData => probeVideo(videoData).tap(() => bar.tick())));
};
