const optionWithValueRegex = /--([^=]+)=(.+)/;

/**
 * Attempts to parse a string into named option with text or array value.
 * @param  {String} optionString String to parse
 * @param  {Object} config       Config object to update.
 * @return {boolean}             True if parse successful, false otherwise.
 */
module.exports = function optionWithValue(optionString, config) {
  const match = optionWithValueRegex.exec(optionString);

  if (match === null) {
    return false;
  }

  const valueArray = match[2].split(',');

  config[match[1]] = (valueArray.length === 1) ? match[2] : valueArray;

  return true;
};
