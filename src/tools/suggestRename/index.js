import tokenize from './tokenize';
import extractYear from './extractYear';
import truncate from './truncate';
import trimTokens from './trimTokens';
import capitalize from './capitalize';

const manipulators = [
  truncate,
  trimTokens,
  capitalize
];

export default function setup() {
  return function tool(itemName) {
    const { year, tokens } = extractYear(tokenize(itemName));

    return {
      year,
      title: manipulators.reduce((newTokens, manipulator) => manipulator(newTokens), tokens).join(' ')
    };
  };
}
