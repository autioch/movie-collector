const path = require('path');
const bluebird = require('bluebird');
const ffProbeAsync = bluebird.promisify(require('fluent-ffmpeg').ffprobe);
const parse = require('./parse');

module.exports = function ffProbe(video, progressBar) {
  return ffProbeAsync(path.join(video.path, video.file))
    .finally(() => progressBar.tick())
    .then(data => Object.assign(video, parse(data)))
    .catch(err => console.log(`Failed to probe ${video.file}, ${err.message}`));
};
