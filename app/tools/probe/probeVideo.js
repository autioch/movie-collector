const path = require('path');
const bluebird = require('bluebird');
const ffProbeAsync = bluebird.promisify(require('fluent-ffmpeg').ffprobe);
const parseFFProbeData = require('./parseFFProbeData');
const { verbose } = require('../../utils');

/**
 * Uses ffprobe to read extra information about videos. Video object is extended with found data.
 * @param  {Object} videoData Object describing video found with parseDir.
 * @return {Object} videoData Original object extended with extra information.
 */
module.exports = function probe(videoData) {
  verbose('TOOL PROBE', `Probe ${videoData.name}`);

  return ffProbeAsync(path.join(videoData.path, videoData.file))
    .then((data) => Object.assign(videoData, { ffmpeg: parseFFProbeData(data) }))
    .tap(() => verbose('TOOL PROBE', `Done ${videoData.name}`))
    .catch((err) => {
      videoData.ffmpeg = { error: err };
    });
};
