module.exports = function padRight(text, len, char = ' ') {
  let i = -1;
  len = len - text.length;
  while (++i < len) {
    text += char;
  }
  return text;
};
