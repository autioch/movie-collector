const Bluebird = require('bluebird');
const mkdirp = require('./mkdirp');
const path = require('path');

/**
 * For each output specified, creates a folder.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to the array of folder paths.
 */
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
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function prepareFolders(videos, config) {
  if (!config.prepare) {
    return Bluebird.resolve(videos);
  }

  return mkdirp(config.outputPath)
    .then(() => makeSubfolders(config))
    .then(() => videos);
};
