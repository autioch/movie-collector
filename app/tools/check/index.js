const progressBar = require('../../utils/progressBar');
const fs = require('bluebird').promisifyAll(require('fs'));
const workers = require('./workers');

module.exports = function check(config, videoDataArray) {
  if (!config.check) {
    return;
  }
  const bar = progressBar('Check data', 1);

  const report = workers.map(worker => worker(videoDataArray)).filter(r => r.list.length > 0);

  return fs
    .writeFileAsync(config.check, JSON.stringify(report, null, '  '))
    .tap(() => bar.tick());
};
