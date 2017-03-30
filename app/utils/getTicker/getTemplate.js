/* eslint no-magic-numbers: 0 */
/* eslint no-param-reassign: 0 */
const padRight = require('./padRight');
const { maxLabelWidth } = require('./settings');

/**
 * Prepares template for ProgressBar package.
 * @param  {String} title Title od the progress bar
 * @param  {Number} total Number of actions to perform
 * @return {String}       Prepared template
 */
module.exports = function getTemplate(title, total) {
  if (title.length < maxLabelWidth) {
    title = padRight(title, maxLabelWidth);
  }
  if (title.length > maxLabelWidth) {
    title = `${title.slice(0, 16)}...`;
  }
  let template = `${title}  :percent  `;

  if (total < 10) {
    template += '  ';
  }
  if (total < 100) {
    template += '  ';
  }
  if (total < 1000) {
    template += '  ';
  }

  return `${template}:current/:total  :bar`;
};
