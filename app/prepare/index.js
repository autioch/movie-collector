const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const load = require('./load');
const scan = require('./scan');

module.exports = function getData(config) {
  const { input } = config;

  return fs
    .statAsync(input)
    .then((stats) => {
      if (stats.isFile()) {
        return load(config);
      }

      if (stats.isDirectory()) {
        return scan(config);
      }

      return bluebird.reject();
    });
};
