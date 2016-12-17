const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const load = require('./load');
const scan = require('./scan');
const { verbose } = require('../../utils');

module.exports = function getData(config) {
  verbose('TOOL GETDATA', config.input);

  return fs
    .statAsync(config.input)
    .tap(() => verbose('TOOL GETDATA', `Stated ${config.input}`))
    .then((stats) => {
      if (stats.isFile()) {
        verbose('TOOL GETDATA', 'Input is a file, loading folderData from it.');

        return load(config);
      }

      if (stats.isDirectory()) {
        verbose('TOOL GETDATA', 'Input is a directory, begining scan.');

        return scan(config);
      }

      verbose('TOOL GETDATA', 'Could not specify input type.');

      return bluebird.reject();
    });
};
