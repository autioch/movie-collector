const tokenize = require('./tokenize');
const extractYear = require('./extractYear');

const manipulators = [
  require('./truncate'),
  require('./trimTokens'),
  require('./capitalize')
];

module.exports = function suggestRename(itemName) {
  const { year, tokens } = extractYear(tokenize(itemName));

  return {
    year,
    title: manipulators.reduce((newTokens, manipulator) => manipulator(newTokens), tokens).join(' ')
  };
};
