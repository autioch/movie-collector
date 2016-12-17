/**
 * Attempts to read language of a stream from its tags.
 * @param  {Object} tags tags property of a stream.
 * @return {String} language Language if successfull, `?` otherwise.
 */
module.exports = function getLanguage(tags) {
  if (tags) {
    if (tags.language) {
      return tags.language;
    }
  }

  return '?';
};
