const updateDict = require('./updateDict');

module.exports = function statString(stat) {
  const dict = {};
  stat.values.sort().forEach(value => updateDict(dict, value));

  return {
    key: stat.key,
    type: stat.type,
    count: stat.values.length,
    variety: Object.keys(dict).length,
    dict: dict
  };
};
