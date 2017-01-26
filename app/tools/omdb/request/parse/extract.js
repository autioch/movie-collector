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
