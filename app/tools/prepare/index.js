const Bluebird = require('bluebird');
const mkdirp = require('./mkdirp');
const path = require('path');

function makeSubfolders(config) {
  const folderPaths = [];

  if (config.outputStat) {
    folderPaths.push(path.join(config.outputPath, 'stat'));
  }

  if (config.outputList) {
    folderPaths.push(path.join(config.outputPath, 'list'));
  }

  return Bluebird.all(folderPaths.map((folderPath) => mkdirp(folderPath)));
}

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

  return mkdirp(config.outputPath)
    .then(() => makeSubfolders(config))
    .then(() => videos);
};
