const path = require('path');
const workers = require('./workers');
const collectData = require('./collectData');
const { getTicker, saveJson } = require('../../utils');
const Bluebird = require('bluebird');

module.exports = function prepareStatData(videos, config) {
  if (!config.outputStat) {
    return Bluebird.resolve(videos);
  }
  const data = collectData(videos);
  const ticker = getTicker('Stat data', 1);

  const stats = Object
    .keys(data)
    .sort()
    .map((key) => data[key])
    .filter((statistic) => !!workers[statistic.type])
    .map((statistic) => workers[workers[statistic.type] ? statistic.type : 'unknown'](statistic));

  return saveJson(path.join(config.outputPath, 'stats.json'), stats)
    .tap(ticker)
    .then(() => videos);
};
