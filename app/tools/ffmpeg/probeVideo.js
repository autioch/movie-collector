const path = require('path');
const bluebird = require('bluebird');
const ffProbeAsync = bluebird.promisify(require('fluent-ffmpeg').ffprobe);
const parseFFProbeData = require('./parseFFProbeData');

/**
 * Uses ffprobe to read extra information about videos. Video object is extended with found data.
 * @param  {Object} videoData Object describing video found with parseDir.
 * @return {Object} videoData Original object extended with extra information.
 */
module.exports = function probe(videoData) {
  const { path: videoPath, file } = videoData;

  return ffProbeAsync(path.join(videoPath, file))
    .then((data) => Object.assign(videoData, { ffmpeg: parseFFProbeData(data) }))
    .catch((err) => {
      videoData.ffmpeg = { error: err };
    });
};
