const { fixedWidth } = require('./settings');

/**
 * Prepares options for the ProgressBar
 * @param  {Number} total Number of actions to perform
 * @return {Object}       Prepared options.
 */
module.exports = function getOptions(total) {
  return {
    total,
    width: process.stdout.columns - fixedWidth,
    complete: '#',
    incomplete: '.',
    renderThrottle: 100
  };
};
