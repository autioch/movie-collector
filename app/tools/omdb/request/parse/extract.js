
const dotsRegex = /\./g;

const textProperties = [
  'Title',
  'Year',
  'Rated',
  'Released',
  'Plot',
  'Awards',
  'imdbID'
];

const numberProperties = [
  'Metascore',
  'imdbRating',
  'imdbVotes',
  'Runtime'
];

const arrayProperties = [
  'Genre',
  'Actors',
  'Country',
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
  const data = {};

  textProperties.forEach((key) => {
    data[key.toLowerCase()] = omdbData[key];
  });

  numberProperties.forEach((key) => {
    data[key.toLowerCase()] = parseFloat(omdbData[key].replace(dotsRegex, ''));
  });

  arrayProperties.forEach((key) => {
    data[key.toLowerCase()] = omdbData[key].split(',').map((value) => value.trim());
  });

  return data;
};
