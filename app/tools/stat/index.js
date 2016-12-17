const workers = require('./workers');
const collectData = require('./collectData');
const { progressBar, verbose } = require('../../utils');
const fs = require('bluebird').promisifyAll(require('fs'));

module.exports = function stat(config, videoArray) {
  if (!config.stat) {
    verbose('TOOL STAT', 'Statistics disabled. Skipping.');

    return;
  }
  const data = collectData(videoArray);

  verbose('TOOL STAT', 'Stats data collected');
  const bar = progressBar('Stat data', 1);

  const stats = Object
    .keys(data)
    .sort()
    .map((key) => data[key])
    .filter((statistic) => !!workers[statistic.type])
    .map((statistic) => workers[workers[statistic.type] ? statistic.type : 'unknown'](stat));

  verbose('TOOL STAT', 'Stats data prepared');

  return fs
    .writeFileAsync(config.stat, JSON.stringify(stats, null, '  '))
    .tap(() => verbose('TOOL STAT', 'Stats data saved to file.'))
    .tap(() => bar.tick());
};
