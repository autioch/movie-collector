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

module.exports = function parseOmdbData(omdbData) {
  let data;
  try {
    data = JSON.parse(omdbData);
  } catch (err) {
    return {
      error: `JSON parse error: ${err.message}`
    };
  }
  if (data.error) {
    return {
      error: `Data error: ${data.Error}`
    };
  }
  return wantedProperties.reduce(function(result, key) {
    result[key.toLowerCase()] = data[key];
    return result;
  }, {});
};
