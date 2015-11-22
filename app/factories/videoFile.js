'use strict';

module.exports = function (file) {

  return Object.assign({}, file, {
    subtitles: '',
    /* video stream */
    duration: 0,
    bitrate: 0,
    language: '?',
    codec: '?',
    fps: 0,
    width: 0,
    height: 0,
    /* audio streams */
    audio: [],
    /* omdb */
    imdb: false,
    rated: '',
    released: '',
    runtime: '',
    genre: '',
    director: '',
    actors: '',
    plot: '',
    languagesUsed: '',
    country: '',
    awards: '',
    metascore: '',
    imdbRating: '',
    imdbId: '',
    imdbVotes: ''
  });
};
