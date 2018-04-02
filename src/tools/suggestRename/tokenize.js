const skipped = ['II', 'LIMITED', 'REPACK'];

function lowerCase(token) {
  if (skipped.indexOf(token) > -1) {
    return token;
  }

  if (!/[a-z]/.test(token) && (token.indexOf('.') > -1)) {
    return token;
  }

  return token.toLowerCase();
}

function normalize(text, separator) {
  return text
    .replace(/\[/gi, `${separator}[`)
    .replace(/\]/gi, `]${separator}`)
    .replace(/\(/gi, `${separator}(`)
    .replace(/\)/gi, `)${separator}`)
    .replace(/ _ /gi, ' - ')
    .replace(/_/gi, separator)
    .replace(separator + separator, separator)
    .replace(separator + separator, separator)
    .trim();
}

function split(text, separator) {
  return text.split(separator)
    .map((token) => token.trim())
    .filter((token) => token.length > 0);
}

function getSeparator(dirName) {
  if (dirName.indexOf(' ') > -1) {
    return ' ';
  }

  return '.';
}

module.exports = function tokenize(dirName) {
  const separator = getSeparator(dirName);
  const newText = normalize(dirName, separator);
  let tokens = split(newText, separator);

  if (/[a-z]/.test(dirName)) {
    tokens = tokens.map(lowerCase);
  }

  return tokens;
};
