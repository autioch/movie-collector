/**
 * Attempts to read language of a stream from its tags.
 * @method getLanguage
 * @param  {object} tags tags property of a stream.
 * @return {string} language Language if successfull, `?` otherwise.
 */
module.exports = function getLanguage(tags) {
  if (tags) {
    if (tags.language) {
      return tags.language;
    }
  }
  return '?';
};
