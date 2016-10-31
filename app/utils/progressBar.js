const ProgressBar = require('progress');
const padRight = require('./padRight');

const maxLabelWidth = 20;
const fixedWidth = maxLabelWidth + //label
  2 + //space
  3 + //:percent
  2 + //space
  4 + //:current 3 signs
  1 + // /
  4 + //:total 3 signs
  2 + //space
  0 + //:bar
  10; //console scroll


function getTemplate(title, total) {
  if (title.length < maxLabelWidth) {
    title = padRight(title, maxLabelWidth);
  }
  if (title.length > maxLabelWidth) {
    title = title.slice(0, 16) + '...';
  }
  let template = title + '  :percent  ';
  if (total < 10) {
    template += '  ';
  }
  if (total < 100) {
    template += '  ';
  }
  if (total < 1000) {
    template += '  ';
  }
  return template + ':current/:total  :bar';
}

function getOptions(total) {
  return {
    total: total,
    width: process.stdout.columns - fixedWidth,
    complete: '#',
    incomplete: '.',
    renderThrottle: 100
  };
}

module.exports = function progressBar(title, total) {
  return new ProgressBar(getTemplate(title, total), getOptions(total));
};
