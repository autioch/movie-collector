const path = require('path');
const bluebird = require('bluebird');
const parse = require('./parse');
const { saveJson } = require('../../utils');
const qbMovieList = require('qb-movie-list');
const copySchema = require('./copySchema');

/**
 * Generates a web app for browsing videos.
 * @param  {Array} videos    Array of videos to check.
 * @param  {Object} config   Application config.
 * @return {Promise}         Promise resolving to videos array.
 */
module.exports = function listData(videos, config) {
  if (!config.outputList) {
    return bluebird.resolve(videos);
  }

  const buildFolder = path.join(config.outputPath, 'list');

  /* Wrap native promise. */
  return bluebird
    .resolve(qbMovieList({
      buildFolder,
      isProduction: config.minify
    }))
    .then(() => saveJson(path.join(buildFolder, 'data', 'items.json'), videos.map(parse)))
    .then(() => copySchema(config))
    .then(() => videos);
};
