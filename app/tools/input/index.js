const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const scanFolder = require('./scanFolder');
const { getTicker, saveJson } = require('../../utils');
const merge = require('./merge');
const update = require('./update');

const totalSteps = 2;

function inputArrayReducer(result, inputPath) {
  return scanFolder(inputPath).then(({ videos, other }) => ({
    videos: result.videos.concat(videos),
    other: result.other.concat(other)
  }));
}

/**
 * Retrieves cache, scans folder and merges the results.
 * @param  {Array} videos   Array of videos to check.
 * @param  {Object} config  Application config.
 * @return {Promise}        Promise resolving to videos array.
 */
module.exports = function getInputData(videos, config) {
  const ticker = getTicker('Scan for data', totalSteps);

  let cachePromise;
  let scanPromise;

  if (config.inputCache) {
    cachePromise = fs
      .readFileAsync(config.inputCache, 'utf8')
      .then(JSON.parse);
  } else {
    cachePromise = bluebird.resolve([]);
  }

  cachePromise.then(ticker);

  if (config.inputPath) {
    if (Array.isArray(config.inputPath)) {
      scanPromise = bluebird.reduce(config.inputPath, inputArrayReducer, {
        videos: [],
        other: []
      });
    } else {
      scanPromise = scanFolder(config.inputPath);
    }
  } else {
    scanPromise = bluebird.resolve({
      videos: [],
      other: []
    });
  }

  scanPromise.then(ticker);

  return bluebird.join(cachePromise, scanPromise, function workData(cacheData, scanData) {
    if (config.outputUnknown && scanData.other.length > 0) {
      console.log(`Found ${scanData.other.length} unkown file(s).`);
      saveJson(path.join(config.outputPath, 'unknown.json'), scanData.other);
    }

    return update(merge(config, cacheData, scanData.videos));
  });
};
