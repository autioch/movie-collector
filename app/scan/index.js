const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const sortFolder = require('./sortFolder');
const parseFolder = require('./parseFolder');
const flattenDeep = require('lodash.flattendeep');
const { progressBar, readJson } = require('../utils');

const totalSteps = 2;

module.exports = function scanForData(config) {
  const bar = progressBar('Scan for data', totalSteps);

  return fs
    .statAsync(config.input)
    .tap(() => bar.tick())
    .then((stats) => {
      if (stats.isFile()) {
        return readJson(config.input).tap(bar.tick);
      }

      if (stats.isDirectory()) {
        return parseFolder(config.input)
          .then((folderData) => flattenDeep(sortFolder(folderData)))
          .tap(bar.tick);
      }

      bar.tick();

      return bluebird.reject();
    });
};
