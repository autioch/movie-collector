const wantedProperties = [
  'Title',
  'Year',
  'Rated',
  'Released',
  'Runtime',
  'Genre',
  'Director',
  'Writer',
  'Actors',
  'Plot',
  'Language',
  'Country',
  'Awards',
  'Metascore',
  'imdbRating',
  'imdbVotes',
  'imdbID'
];

/**
 * Attempts to extract relevant information from omdb response.
 * @param  {String} omdbData Response from the omdb server.
 * @return {Object}          Object with error information or extracted data.
 */
module.exports = function parseOmdbData(omdbData) {
  let data;

  try {
    data = JSON.parse(omdbData);
  } catch (err) {
    return { error: `JSON parse error: ${err.message}` };
  }

  if (data.Error) {
    return { error: `Data error: ${data.Error}` };
  }

  if (data.error) {
    return { error: `Data error: ${data.error}` };
  }

  return wantedProperties.reduce((result, key) => {
    result[key.toLowerCase()] = data[key];

    return result;
  }, {});
};
