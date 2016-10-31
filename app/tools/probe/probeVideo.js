const path = require('path');
const bluebird = require('bluebird');
const ffProbeAsync = bluebird.promisify(require('fluent-ffmpeg').ffprobe);
const parseFFProbeData = require('./parseFFProbeData');

/**
 * Uses ffprobe to read extra information about videos. Video object is extended with found data.
 * @method probe
 * @param  {object} videoData Object describing video found with parseDir.
 * @return {object} videoData Original object extended with extra information.
 */
module.exports = function probe(videoData) {
  return ffProbeAsync(path.join(videoData.path, videoData.file))
    .then(data => Object.assign(videoData, {
      ffmpeg: parseFFProbeData(data)
    }))
    .catch(function(err) {
      videoData.ffmpeg = {
        error: err
      };
    });
};
