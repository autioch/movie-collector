const separatorRegex = /(\.|,| )/g;

const textProperties = [
  'Awards',
  'imdbID',
  'Plot',
  'Rated',
  'Released',
  'Title',
  'Poster'
];

const numberProperties = [
  'imdbRating',
  'imdbVotes',
  'Metascore',
  'Runtime',
  'Year'
];

const arrayProperties = [
  'Actors',
  'Country',
  'Director',
  'Genre',
  'Language',
  'Writer'
];

/**
 * Extracts and formats data retrieved from omdb.
 * @param  {Object} omdbData Raw omdb data.
 * @return {Object}          Formatted data.
 */
module.exports = function extractData(omdbData) {
  const data = {
    generated: new Date().toJSON()
  };

  textProperties.forEach((key) => {
    data[key.toLowerCase()] = omdbData[key];
  });

  numberProperties.forEach((key) => {
    data[key.toLowerCase()] = parseFloat(omdbData[key].replace(separatorRegex, ''));
  });

  arrayProperties.forEach((key) => {
    data[key.toLowerCase()] = omdbData[key].split(',').map((value) => value.trim());
  });

  return data;
};
