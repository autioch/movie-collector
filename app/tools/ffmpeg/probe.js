const path = require('path');
const bluebird = require('bluebird');
const ffProbeAsync = bluebird.promisify(require('fluent-ffmpeg').ffprobe);
const parse = require('./parse');

/**
 * Uses ffprobe to read extra information about videos. Video object is extended with found data.
 * @param  {Object} videoData Object describing video found with parseDir.
 * @return {Object} videoData Original object extended with extra information.
 */
module.exports = function probe(videoData) {
  const { file: { folder, name } } = videoData;

  return ffProbeAsync(path.join(folder, name))
    .then((data) => Object.assign(videoData, { ffmpeg: parse(data) }))
    .catch((err) => {
      videoData.ffmpeg = { error: err };
    });
};
