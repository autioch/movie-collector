/* eslint no-magic-numbers: 0 */
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
  10; // scroll

module.exports = {
  maxLabelWidth,
  fixedWidth
};
