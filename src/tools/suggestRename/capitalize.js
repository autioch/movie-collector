const skipped = [
  'a',
  'an',
  'and',
  'by',
  'do',
  'for',
  'from',
  'in',
  'is',
  'od',
  'of',
  'on',
  'the',
  'to',
  'vs',
  'w',
  'v',
  'with'
];

function skipTransform(token, index, tokens) {
  if (skipped.indexOf(token) > -1) {
    if (index > 0 && index < tokens.length - 1) {
      return true;
    }
  }

  return false;
}

function middleCapitalize(token) {
  return token
    .replace(/-([a-z])/g, (match) => `-${match[1].toUpperCase()}`)
    .replace(/\[([a-z])/g, (match) => `[${match[1].toUpperCase()}`)
    .replace(/\(([a-z])/g, (match) => `(${match[1].toUpperCase()}`);
}

function firstCapitalize(token) {
  return token[0].toUpperCase() + token.slice(1);
}

module.exports = function capitalize(tokens) {
  return tokens.map((token, index) => {
    if (skipTransform(token, index, tokens)) {
      return token;
    }

    return firstCapitalize(middleCapitalize(token));
  });
};
