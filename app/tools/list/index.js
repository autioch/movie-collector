const bluebird = require('bluebird');

module.exports = function prepareStatData(videos, config) {
  return bluebird.resolve(videos);
};
