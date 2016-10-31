const optionWithValueRegex = /--([^=]+)=(.+)/;
const optionRegex = /--([^=]+)/;

const inlineConfig = {};
const unknownSettings = [];

process.argv.slice(2).forEach(function(val) {
  const optionWithValueMatch = optionWithValueRegex.exec(val);
  if (optionWithValueMatch !== null) {
    const valueArray = optionWithValueMatch[2].split(',');
    inlineConfig[optionWithValueMatch[1]] = (valueArray.length === 1) ? optionWithValueMatch[2] : valueArray;
    return;
  }
  const optionMatch = optionRegex.exec(val);
  if (optionMatch !== null) {
    inlineConfig[optionMatch[1]] = true;
    return;
  }

  return unknownSettings.push(val);
});

if (unknownSettings.length) {
  console.log('Unknown inline settings');
  console.log(unknownSettings);
}

module.exports = inlineConfig;
