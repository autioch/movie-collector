const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const scanFolder = require('./scanFolder');
const { getTicker } = require('../../utils');

const totalSteps = 2;

module.exports = function getInputData(videos, config) {
  const ticker = getTicker('Scan for data', totalSteps);

  return fs
    .statAsync(config.input)
    .tap(ticker)
    .then((stats) => {
      if (stats.isFile()) {
        return fs
          .readFileAsync(config.input, 'utf8')
          .then(JSON.parse)
          .tap(ticker);
      }

      if (stats.isDirectory()) {
        return scanFolder(config).tap(ticker);
      }

      return bluebird.reject().tap(ticker);
    });
};
