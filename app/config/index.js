const defaultConfig = require('./default');
const inlineConfig = require('./inline');
const requiredConfig = require('./required');
const path = require('path');

let fileConfig = {};
if (inlineConfig.config) {
  try {
    fileConfig = require(path.join(path.resolve('.'), inlineConfig.config));
  } catch (err) {
    console.log('Could not read config file. ', err.message);
  }
}

const config = Object.assign({}, defaultConfig, fileConfig, inlineConfig);

let allOptionsValid = true;

Object.keys(requiredConfig).forEach(function(key) {
  const type = requiredConfig[key];
  if (type === 'string' && !(('string' === typeof config[key]) && (config[key].length > 0))) {
    console.error(`Option '${key}' must be a non-empty string.`);
    allOptionsValid = false;
  }
  if (type === 'array' && !Array.isArray(config[key])) {
    console.error(`Option '${key}' must be an array.`);
    allOptionsValid = false;
  }
});

if (!allOptionsValid) {
  process.exit(1);
}

module.exports = config;
