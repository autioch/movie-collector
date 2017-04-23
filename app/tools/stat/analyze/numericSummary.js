/* Parse added for negative numbers. */
const weightedTop = (sum, serie) => sum + (parseFloat(serie.label) * serie.value);
const weightedBottom = (sum, serie) => sum + serie.value;
const sumUp = (sum, value) => sum + value;

module.exports = function numericSummary(series) {
  const uniqueValues = series.map((serie) => serie.label);

  return [{
    label: 'From',
    value: Math.min(...uniqueValues)
  }, {
    label: 'To',
    value: Math.max(...uniqueValues)
  }, {
    label: 'Average',
    value: Math.round(uniqueValues.reduce(sumUp, 0) / uniqueValues.length)
  }, {
    label: 'Weighted',
    value: Math.round(series.reduce(weightedTop, 0) / series.reduce(weightedBottom, 0))
  }];
};
