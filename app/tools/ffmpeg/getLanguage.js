/**
 * Attempts to read language of a stream from its tags.
 * @param  {Object} tags tags property of a stream.
 * @return {String} language Language if successfull, `?` otherwise.
 */
module.exports = function getLanguage(tags = {}) {
  return tags.language || '?';
};
