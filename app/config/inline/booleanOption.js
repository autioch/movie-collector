const booleanOptionRegex = /--([^=]+)/;

/**
 * Attempts to parse string into boolean option.
 * @param  {String} optionString String to parse
 * @param  {Object} config       Config object to update.
 * @return {boolean}             True if parse successful, false otherwise.
 */
module.exports = function booleanOption(optionString, config) {
  const match = booleanOptionRegex.exec(optionString);

  if (match === null) {
    return false;
  }

  config[match[1]] = true;

  return true;
};
