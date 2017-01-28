const updateDict = require('./updateDict');

/**
 * Decides order of string fields containing floats.
 * @param  {String} a [description]
 * @param  {String} b [description]
 * @return {Number}   Order of the strings.
 */
function sortFloat(a, b) {
  const floatA = parseFloat(a);
  const floatB = parseFloat(b);

  if (floatA > floatB) {
    return 1;
  }

  return floatB > floatA ? -1 : 0;
}

module.exports = function statNumber(stat) {
  const values = stat.values;
  const dict = {};
  let dividend = 0;
  let divider = 0;
  let keysSum = 0;
  let min = values[0];
  let max = 0;
  let sum = 0;

  values.sort(sortFloat).forEach((value) => {
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

  keys.forEach((key) => {
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
    variety: keys.length,
    weighted: divider ? Math.round(dividend / divider) : 'N/A',
    dict
  };
};
