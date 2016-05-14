const bluebird = require('bluebird');

module.exports = function viewStat(stats) {
  return bluebird.resolve(stats);
};
