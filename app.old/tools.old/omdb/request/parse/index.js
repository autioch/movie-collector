const extract = require('./extract');
const check = require('./check');

/**
 * Attempts to extract relevant information from omdb response.
 * @param  {String} omdbData Response from the omdb server.
 * @return {Object}          Object with error information or extracted data.
 */
module.exports = function parseOmdbData(omdbData) {
  const data = check(omdbData);

  if (data.error) {
    return data;
  }

  return extract(data);
};
