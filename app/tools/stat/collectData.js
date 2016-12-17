const ignore = require('./ignore');

module.exports = function collectData(videoArray) {
  const scanData = {};

  function scanForData(prefix, object) {
    prefix = prefix.length ? `${prefix}.` : '';
    Object.keys(object)
      .filter((key) => ignore.indexOf(key) < 0)
      .filter((key) => ignore.indexOf(prefix + key) < 0)
      .forEach((key) => addData(prefix + key, object[key]));
  }

  function addData(prefixedKey, value) {
    if (scanData.hasOwnProperty(prefixedKey)) {
      return scanData[prefixedKey].values.push(value);
    }
    if (Array.isArray(value)) {
      return value.forEach((val, index) => {
        addData(`${prefixedKey}[${index}]`, val);
      });
    }
    if (typeof value === 'object' && value !== null) {
      return scanForData(prefixedKey, value);
    }
    scanData[prefixedKey] = {
      key: prefixedKey,
      type: typeof value,
      values: [value]
    };
  }

  videoArray.forEach((video) => scanForData('', video));

  return scanData;
};
