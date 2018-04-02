const truncateTokens = [
  '(divx)',
  '[tvrip]',
  'cd1',
  'cd2',
  'divx',
  'dub-pl',
  'dubbingpl',
  'dvd-ready',
  'dvdrip',
  'dvdscr',
  'LIMITED',
  'REPACK',
  'pl',
  'xvid',
  '1080p',
  '720p',
  '480p'
];

function sliceTokens(tokens, truncateToken) {
  const index = tokens.indexOf(truncateToken);

  if (index > -1) {
    return tokens.slice(0, index);
  }

  return tokens;
}

module.exports = function truncate(tokens) {
  return truncateTokens.reduce(sliceTokens, tokens);
};
