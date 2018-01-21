const booleanOption = require('./booleanOption');
const optionWithValue = require('./optionWithValue');
const nonParamArgsCount = 2;

const config = {};
const unknownSettings = [];

process.argv.slice(nonParamArgsCount).forEach(function parseOption(option) {
  if (!optionWithValue(option, config) && !booleanOption(option, config)) {
    unknownSettings.push(option);
  }
});

if (unknownSettings.length) {
  console.log('Unknown inline settings');
  console.log(unknownSettings);
}

module.exports = config;
