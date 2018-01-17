const path = require('path');
const collect = require('./collect');
const analyze = require('./analyze');
const filter = require('./filter');
const serialize = require('./serialize');
const { getTicker, saveJson } = require('../../utils');
const Bluebird = require('bluebird');

module.exports = function prepareStatData(videos, config) {
  if (!config.outputStat) {
    return Bluebird.resolve(videos);
  }

  const ticker = getTicker('Stat data', 1);
  const data = collect(videos);
  const stats = data.map(analyze).filter(filter).map(serialize);
  const outputPath = path.join(config.outputPath, 'stat', 'stat.json');

  return saveJson(outputPath, stats).tap(ticker).then(() => videos);
};
