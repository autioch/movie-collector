const whitespaceTokens = [
  /^pl$/gi,
  /\[/gi,
  /\(2\)/gi
];

function sliceTokens(tokens, whitespaceToken) {
  if (tokens[tokens.length - 1].match(whitespaceToken)) {
    return tokens.slice(0, -1);
  }

  return tokens;
}

module.exports = function trimTokens(tokens) {
  return whitespaceTokens
    .reduce((newTokens, truncateToken) => sliceTokens(newTokens, truncateToken), tokens);
};
