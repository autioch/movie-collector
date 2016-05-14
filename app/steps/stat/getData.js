const getVideos = reqAbs('app/utils/getVideos');
const ignore = require('./ignore');

function addData(data, key, value) {
  if (data.hasOwnProperty(key)) {
    data[key].values.push(value);
  } else {
    data[key] = {
      key: key,
      type: typeof value,
      values: [value]
    };
  }
}

module.exports = function getData(dir) {
  const data = {};
  getVideos(dir).forEach(function(video) {
    Object.keys(video)
      .filter(key => ignore.indexOf(key) < 0)
      .forEach(key => addData(data, key, video[key]));
  });
  return data;
};
