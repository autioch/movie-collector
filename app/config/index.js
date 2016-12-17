const defaultConfig = require('./default');
const inlineConfig = require('./inline');
const fileConfig = require('./file');
const validate = require('./validate');

let fileConfigContent = {};

if (inlineConfig.config) {
  fileConfigContent = fileConfig(inlineConfig.config);
}

const config = Object.assign({}, defaultConfig, fileConfigContent, inlineConfig);

if (!validate(config)) {
  throw Error('Invalid options found.');
}

module.exports = config;
