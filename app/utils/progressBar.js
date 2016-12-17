/* eslint no-magic-numbers: 0 */
const ProgressBar = require('progress');
const padRight = require('./padRight');
const config = require('../config');

const maxLabelWidth = 20;
const fixedWidth = maxLabelWidth + // label
  2 + // space
  3 + // :percent
  2 + // space
  4 + // :current 3 signs
  1 + // /
  4 + // :total 3 signs
  2 + // space
  0 + // :bar
  10; // console scroll

/**
 * Prepares template for ProgressBar package.
 * @param  {String} title Title od the progress bar
 * @param  {Number} total Number of actions to perform
 * @return {String}       Prepared template
 */
function getTemplate(title, total) {
  if (title.length < maxLabelWidth) {
    title = padRight(title, maxLabelWidth);
  }
  if (title.length > maxLabelWidth) {
    title = `${title.slice(0, 16) }...`;
  }
  let template = `${title }  :percent  `;

  if (total < 10) {
    template += '  ';
  }
  if (total < 100) {
    template += '  ';
  }
  if (total < 1000) {
    template += '  ';
  }

  return `${template }:current/:total  :bar`;
}

/**
 * Prepares options for the ProgressBar
 * @param  {Number} total Number of actions to perform
 * @return {Object}       Prepared options.
 */
function getOptions(total) {
  return {
    total,
    width: process.stdout.columns - fixedWidth,
    complete: '#',
    incomplete: '.',
    renderThrottle: 100
  };
}

/**
 * Returns instance of a console progress bar.
 * @param  {String} title Title od the progress bar
 * @param  {Number} total Number of actions to perform
 * @return {ProgressBar}       Instance of ProgressBar
 */
module.exports = function progressBar(title, total) {
  if (config.verbose) {
    return { tick() {} };
  }

  return new ProgressBar(getTemplate(title, total), getOptions(total));
};
