const ProgressBar = require('progress');
const padRight = reqAbs('collector/utils/padRight');

const fixedWidth = 12; //for spacing, scroll and percent
const labelWidth = 12;

function getBarWidth(total) {
  const terminalWidth = process.stdout.columns;
  const totalWidth = total.toString().length;
  return terminalWidth - labelWidth - fixedWidth - totalWidth * 2;
}

module.exports = function getProgressBar(title, total) {
  const template = ' :percent  :current/:total  :bar';
  return new ProgressBar(padRight(title, labelWidth) + template, {
    total: total,
    width: getBarWidth(total),
    complete: '#',
    incomplete: '.'
  });
};
