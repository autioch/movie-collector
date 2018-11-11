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

export default function suggestRename(itemName) {
  const { year, tokens } = extractYear(tokenize(itemName));
  const title = manipulators.reduce((newTokens, manipulator) => manipulator(newTokens), tokens).join(' ');
  const fullName = year ? `[${year}] ${title}` : title;

  return {
    year,
    title,
    fullName
  };
}
