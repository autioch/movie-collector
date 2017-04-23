const commonSummary = require('./commonSummary');
const numericSummary = require('./numericSummary');

function updateDict(dict, label) {
  if (dict.hasOwnProperty(label)) {
    dict[label].value++;
  } else {
    dict[label] = {
      label,
      value: 1
    };
  }

  return dict;
}

function shouldBeSkipped(value) {
  return (value === null) || (value === 'null') || (value === undefined) || (value === 'undefined');
}

module.exports = function analyzeStat(statistic) {
  const allValues = statistic.values.filter((value) => !shouldBeSkipped(value));
  const serieDict = allValues.reduce((dict, value) => updateDict(dict, value), {});
  const series = Object.keys(serieDict).map((key) => serieDict[key]);

  let summary = commonSummary(allValues, series);

  if (statistic.type === 'number') {
    summary = summary.concat(numericSummary(series));
    series.sort((serieA, serieB) => serieA.label - serieB.label);
  } else {
    series.sort((serieA, serieB) => serieA.label.toString().localeCompare(serieB.label.toString()));
  }

  return {
    key: statistic.key,
    count: allValues.length,
    variety: series.length,
    series,
    summary
  };
};
