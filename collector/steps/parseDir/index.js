const readItem = require('./readItem');
const getProgressBar = reqAbs('collector/utils/getProgressBar');

module.exports = function(dir) {
  const progressBar = getProgressBar('Parse dir', 1);
  return readItem(dir, '').tap(() => progressBar.tick());
};
