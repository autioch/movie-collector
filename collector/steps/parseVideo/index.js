const bluebird = require('bluebird');
const parse = require('./parse');
const getProgressBar = reqAbs('collector/utils/getProgressBar');

module.exports = function(dir) {
  const progressBar = getProgressBar('Parse video', 1);
  return bluebird.resolve(parse(dir)).tap(() => progressBar.tick());
};
