/* eslint no-param-reassign: 0 */
/**
 * Appends characters to end of string until it has required length.
 * @param  {String} text    Text to extend
 * @param  {Number} len     Expected length
 * @param  {String} char    Character to append.
 * @return {String}         Padded text
 */
module.exports = function padRight(text, len, char = ' ') {
  let i = -1;

  len -= text.length;
  while (++i < len) {
    text += char;
  }

  return text;
};
