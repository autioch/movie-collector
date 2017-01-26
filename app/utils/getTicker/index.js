/* eslint no-magic-numbers: 0 */
const ProgressBar = require('progress');
const getTemplate = require('./getTemplate');
const getOptions = require('./getOptions');

/**
 * Returns instance of a console progress bar.
 * @param  {String} title Title od the progress bar
 * @param  {Number} total Number of actions to perform
 * @return {Function}     Wrapper for bar tick
 */
module.exports = function getTicker(title, total) {
  const bar = new ProgressBar(getTemplate(title, total), getOptions(total));

  return function ticker() {
    bar.tick();
  };
};
