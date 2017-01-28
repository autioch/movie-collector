const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const scanFolder = require('./scanFolder');
const { getTicker, saveJson } = require('../../utils');
const merge = require('./merge');

const totalSteps = 2;

module.exports = function getInputData(videos, config) {
  const ticker = getTicker('Scan for data', totalSteps);

  let cachePromise;
  let scanPromise;

  if (config.inputCache) {
    cachePromise = fs
      .readFileAsync(config.input, 'utf8')
      .then(JSON.parse);
  } else {
    cachePromise = bluebird.resolve([]);
  }

  cachePromise.then(ticker);

  if (config.inputPath) {
    scanPromise = scanFolder(config);
  } else {
    scanPromise = bluebird.resolve([]);
  }

  scanPromise.then(ticker);

  return bluebird.join(cachePromise, scanPromise, function workData(cacheData, scanData) {
    if (config.outputUnknown && scanData.other.length > 0) {
      saveJson(path.join(config.outputPath, 'unknown.json'), scanData.other);
    }

    return merge(config, cacheData, scanData.videos);
  });
};
