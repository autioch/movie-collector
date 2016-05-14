const bluebird = require('bluebird');
const getVideos = reqAbs('app/utils/getVideos');
const probe = require('./probe');
const getProgressBar = reqAbs('app/utils/getProgressBar');

module.exports = function(item) {
  const videos = getVideos(item);
  const progressBar = getProgressBar('ffProbe', videos.length);
  return bluebird
    .all(videos.map(video => probe(video, progressBar)))
    .then(() => item);
};
