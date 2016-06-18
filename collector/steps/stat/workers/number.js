const sortFloat = require('./sortFloat');
const updateDict = require('./updateDict');

module.exports = function statNumber(stat) {
  const values = stat.values;
  const dict = {};
  let dividend = 0;
  let divider = 0;
  let keysSum = 0;
  let min = values[0];
  let max = 0;
  let sum = 0;
  values.sort(sortFloat).forEach(function(value) {
    const num = parseFloat(value, 10);
    if (!isNaN(num)) {
      if (min > num) {
        min = num;
      }
      if (max < num) {
        max = num;
      }
      sum += num;
    }
    updateDict(dict, value.toString());
  });

  const keys = Object.keys(dict);
  keys.forEach(function(key) {
    const parsed = parseFloat(key, 10);
    keysSum += parsed;
    dividend += parsed * dict[key];
    divider += dict[key];
  });
  return {
    key: stat.key,
    type: stat.type,
    count: values.length,
    min,
    max,
    sum,
    average: Math.round(keysSum / keys.length),
    weighted: divider ? Math.round(dividend / divider) : 'N/A',
    variety: keys.length,
    dict
  };
};
