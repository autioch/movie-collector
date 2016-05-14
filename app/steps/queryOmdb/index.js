const getVideos = reqAbs('app/utils/getVideos');
const bluebird = require('bluebird');
const query = require('./query');
const getProgressBar = reqAbs('app/utils/getProgressBar');

module.exports = function(item) {
  const videos = getVideos(item);
  const progressBar = getProgressBar('Query IMDB', videos.length);

  return bluebird
    .all(videos.map(video => query(video, progressBar)))
    .then(() => item);
};
