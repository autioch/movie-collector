const path = require('path');
const Bluebird = require('bluebird');
const mkdirp = require('./mkdirp');

/**
 * Creates all folder paths specified in the config.
 * @param  {Object} config Application config
 * @return {Promise}       Promise resolving when all directories have been created.
 */
module.exports = function prepareFolders(config) {
  return Bluebird.all(
    ['output', 'stat']
      .filter((folder) => !!config[folder])
      .map((folder) => path.dirname(config[folder]))
      .map((abstractFolder) => mkdirp(abstractFolder))
  );
};
