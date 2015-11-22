'use strict';

module.exports = function (data) {

  if (data.Response === 'True') {
    return {
      rated: data.Rated,
      released: data.Released,
      runtime: data.Runtime,
      genre: data.Genre,
      director: data.Director,
      actors: data.Actors,
      plot: data.Plot,
      languageUsed: data.Language,
      country: data.Country,
      awards: data.Awards,
      metascore: data.Metascore,
      imdbRating: data.imdbRating,
      imdbId: data.imdbID,
      imdbVotes: data.imdbVotes
    };
  }
  return false;
};
