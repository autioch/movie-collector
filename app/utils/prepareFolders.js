const path = require('path');
const Bluebird = require('bluebird');
const mkdirp = require('./mkdirp');
const verbose = require('./verbose');

/**
 * Creates all folder paths specified in the config.
 * @param  {Object} config Application config
 * @return {Promise}       Promise resolving when all directories have been created.
 */
module.exports = function prepareFolders(config) {
  const promises = [];

  if (config.output) {
    const folderName = path.dirname(config.output);

    verbose('UTIL', `Create output path ${folderName}`);
    promises.push(mkdirp(folderName).tap(() => verbose('UTIL', `Created output path ${folderName}`)));
  }

  if (config.stat) {
    const folderName = path.dirname(path.join(config.stat, 'stat'));

    verbose('UTIL', `Create stats path ${folderName}`);
    promises.push(mkdirp(folderName).tap(() => verbose('UTIL', `Created stats path ${folderName}`)));
  }

  if (config.check) {
    const folderName = path.dirname(config.check);

    verbose('UTIL', `Create check path ${config.check}`);
    promises.push(mkdirp(folderName).tap(() => verbose('UTIL', `Created check path ${folderName}`)));
  }

  return Bluebird.all(promises);
};
