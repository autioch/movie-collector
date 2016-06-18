const bluebird = require('bluebird');
const getVideos = reqAbs('collector/utils/getVideos');
const probe = require('./probe');
const getProgressBar = reqAbs('collector/utils/getProgressBar');

module.exports = function(item) {
  const videos = getVideos(item);
  const progressBar = getProgressBar('ffProbe', videos.length);
  return bluebird
    .all(videos.map(video => probe(video, progressBar)))
    .then(() => item);
};
