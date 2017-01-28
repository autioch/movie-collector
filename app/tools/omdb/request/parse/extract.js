const textProperties = [
  'Title',
  'Year',
  'Rated',
  'Released',
  'Plot',
  'Country',
  'Awards',
  'Metascore',
  'imdbRating',
  'imdbVotes',
  'imdbID'
];

const arrayProperties = [
  'Genre',
  'Actors',
  'Director',
  'Writer',
  'Language'
];

/**
 * Extracts and formats data retrieved from omdb.
 * @param  {Object} omdbData Raw omdb data.
 * @return {Object}          Formatted data.
 */
module.exports = function extractData(omdbData) {
  const data = textProperties.reduce((result, key) => {
    result[key.toLowerCase()] = omdbData[key];

    return result;
  }, {});

  data.runtime = parseInt(omdbData.Runtime, 10);

  return arrayProperties.reduce((result, key) => {
    result[key.toLowerCase()] = omdbData[key].split(',').map((value) => value.trim());

    return result;
  }, data);
};
