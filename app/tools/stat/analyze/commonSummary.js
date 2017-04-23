module.exports = function commonSummary(allValues, series) {
  const valueOccurences = series.map((serie) => serie.value);

  return [{
    label: 'Count',
    value: allValues.length
  }, {
    label: 'Variety',
    value: series.length
  }, {
    label: 'Top',
    value: Math.max(...valueOccurences)
  }, {
    label: 'Bottom',
    value: Math.min(...valueOccurences)
  }];
};
