// const path = require('path');
const Bluebird = require('bluebird');
const mkdirp = require('./mkdirp');

/**
 * Creates all folder paths specified in the config.
 * @param  {Array} videos Array of video data.
 * @param  {Object} config Application config.
 * @return {Promise}       Promise resolving when all directories have been created.
 */
module.exports = function prepareFolders(videos, config) {
  if (!config.prepare) {
    return Bluebird.resolve(videos);
  }

  return mkdirp(config.outputPath).then(() => videos);
};
