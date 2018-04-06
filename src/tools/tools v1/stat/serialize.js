const underscoreRegex = /_/g;
const dotRegex = /\./g;
const bracketRegex = /\[\]/g;

function parseHeader(statistic, index) {
  const parsed = statistic.key
    .replace(underscoreRegex, ' ')
    .replace(dotRegex, ' ')
    .replace(bracketRegex, ' ')
    .replace(/\.?([A-Z]+)/g, (match, group) => ` ${group}`)
    .replace(/^_/, '');

  return `${index + 1}. ${parsed}`;
}

module.exports = function serialize(statistic, index) {
  return {
    header: parseHeader(statistic, index),
    summary: statistic.summary,
    series: statistic.series
  };
};
