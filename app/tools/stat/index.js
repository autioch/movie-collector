const workers = require('./workers');
const collectData = require('./collectData');
const progressBar = require('../../utils/progressBar');
const fs = require('bluebird').promisifyAll(require('fs'));

module.exports = function stat(config, videoArray) {
  if (!config.stat) {
    return;
  }
  const data = collectData(videoArray);
  const bar = progressBar('Stat data', 1);

  const stats = Object
    .keys(data)
    .sort()
    .map(key => data[key])
    .filter(stat => !!workers[stat.type])
    .map(stat => workers[workers[stat.type] ? stat.type : 'unknown'](stat));

  return fs
    .writeFileAsync(config.stat, JSON.stringify(stats, null, '  '))
    .tap(() => bar.tick());
};
