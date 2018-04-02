const MIN_YEAR = 1930;
const MAX_YEAR = new Date().getFullYear() + 1;

const YEARS_REGEXES = [
  // /^-\d\d\d\d-$/
  /^\(\d\d\d\d\)$/,
  /^\[\d\d\d\d\]$/
];

const NAN_REGEX = /[^0-9]/gi;

function isYear(token) {
  if (YEARS_REGEXES.some((regex) => regex.test(token))) {
    return true;
  }

  const num = parseInt(token, 10);

  if (isNaN(num)) {
    return false;
  }

  if ((num > MIN_YEAR) && num < MAX_YEAR) {
    return true;
  }

  return false;
}

function parseYear(token) {
  const numbersOnly = token.replace(NAN_REGEX, '');

  return parseInt(numbersOnly, 10);
}

module.exports = function extractYear(tokens) {
  let year;
  const newTokens = [];

  for (let index = 0; index < tokens.length; index++) {
    if (isYear(tokens[index]) && index > 0) {
      year = parseYear(tokens[index]);
      break;
    }

    newTokens.push(tokens[index]);
  }

  return {
    year,
    tokens: newTokens
  };
};
