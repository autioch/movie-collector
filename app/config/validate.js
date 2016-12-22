/* Simplified json schema validation */
const requiredConfig = require('./required');

/**
 * Checks if all required options are set.
 * @param  {Object} config Object of options.
 * @return {boolean}       True if required options are present and set, false otherwise.
 */
module.exports = function validate(config) {
  Object.keys(requiredConfig).forEach((key) => {
    const type = requiredConfig[key];

    if (type === 'string' && !((typeof config[key] === 'string') && (config[key].length > 0))) {
      console.error(`Option '${key}' must be a non-empty string.`);

      return false;
    }
    if (type === 'array' && !Array.isArray(config[key])) {
      console.error(`Option '${key}' must be an array.`);

      return false;
    }
  });

  return true;
};
