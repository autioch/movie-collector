const workers = require('./workers');
const collectData = require('./collectData');
const { getTicker, saveJson } = require('../../utils');

module.exports = function prepareStatData(videos, config) {
  const data = collectData(videos);
  const ticker = getTicker('Stat data', 1);

  const stats = Object
    .keys(data)
    .sort()
    .map((key) => data[key])
    .filter((statistic) => !!workers[statistic.type])
    .map((statistic) => workers[workers[statistic.type] ? statistic.type : 'unknown'](statistic));

  return saveJson(config.stat, stats)
    .tap(ticker)
    .then(() => videos);
};
