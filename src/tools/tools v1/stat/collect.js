const ignore = [
  'errors'
];

module.exports = function collectData(videoArray) {
  const scanData = {};

  function scanForData(prefixedKey, object) {
    const prefix = prefixedKey.length ? `${prefixedKey}.` : '';

    Object.keys(object)
      .filter((key) => ignore.indexOf(key) < 0)
      .filter((key) => ignore.indexOf(prefix + key) < 0)
      .forEach((key) => addData(prefix + key, object[key]));
  }

  function addData(prefixedKey, value) {
    if (scanData.hasOwnProperty(prefixedKey)) {
      scanData[prefixedKey].values.push(value);
    } else if (Array.isArray(value)) {
      value.forEach((val) => {
        addData(`${prefixedKey}[]`, val);
      });
    } else if (typeof value === 'object' && value !== null) {
      scanForData(prefixedKey, value);
    } else {
      scanData[prefixedKey] = {
        key: prefixedKey,
        type: typeof value,
        values: [value]
      };
    }
  }

  videoArray.forEach((video) => scanForData('', video));

  return Object.keys(scanData).map((key) => scanData[key]);
};
