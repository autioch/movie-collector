const path = require('path');
const bluebird = require('bluebird');
const parse = require('./parse');
const { getTicker, saveJson } = require('../../utils');
const qbMovieList = require('qb-movie-list');
const copySchema = require('./copySchema');

const totalSteps = 3;

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

  const ticker = getTicker('Save list', totalSteps);
  const buildFolder = path.join(config.outputPath, 'list');

  return bluebird

    /* Wrap native promise. */
    .resolve(qbMovieList({
      buildFolder,
      isProduction: config.minify
    }))
    .tap(ticker)
    .then(() => saveJson(path.join(buildFolder, 'data', 'items.json'), videos.map(parse)))
    .tap(ticker)
    .then(() => copySchema(config))
    .tap(ticker)
    .then(() => videos);
};
