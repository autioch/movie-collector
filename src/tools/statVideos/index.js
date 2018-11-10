import path from 'path';
import collect from './collect';
import analyze from './analyze';
import filter from './filter';
import serialize from './serialize';
import { saveJson } from '../../utils';
import Bluebird from 'bluebird';

module.exports = function prepareStatData(videos, config) {
  if (!config.outputStat) {
    return Bluebird.resolve(videos);
  }

  const data = collect(videos);
  const stats = data.map(analyze).filter(filter).map(serialize);
  const outputPath = path.join(config.outputPath, 'stat', 'stat.json');

  return saveJson(outputPath, stats).then(() => videos);
};
