const path = require('path');
const collect = require('./collect');
const analyze = require('./analyze');
const filter = require('./filter');
const serialize = require('./serialize');
const { saveJson } = require('../../utils');
const Bluebird = require('bluebird');

module.exports = function prepareStatData(videos, config) {
  if (!config.outputStat) {
    return Bluebird.resolve(videos);
  }

  const data = collect(videos);
  const stats = data.map(analyze).filter(filter).map(serialize);
  const outputPath = path.join(config.outputPath, 'stat', 'stat.json');

  return saveJson(outputPath, stats).then(() => videos);
};
