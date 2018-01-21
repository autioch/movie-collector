const path = require('path');

/**
 * Attempts to read configuration file
 * @param  {String} fileName Name of the config file.
 * @return {Object}          Config object.
 */
module.exports = function file(fileName) {
  let fileConfig = {};

  if (fileName) {
    try {
      fileConfig = require(path.join(path.resolve('.'), fileName));
    } catch (err) {
      console.error('Could not read config file. ', err.message);
    }
  }

  return fileConfig;
};
