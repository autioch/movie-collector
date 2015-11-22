'use strict';

let http = require('http');
let dbLoad = requireFrom('app/dbLoad');
let dbSave = requireFrom('app/dbSave');
let omdbResultFactory = require('../factories/omdbResult');
let Counter = requireFrom('app/counter');
let database;

const counterSettings = {
  cached: 0,
  found: 0,
  error: 0,
  notFound: 0
};

module.exports = function (folders, callback) {

  database = dbLoad('omdb') || {};
  let movies = [];
  folders.forEach(function (folder) {
    folder.videos.forEach((movie) => movies.push(movie));
  });

  let counter = new Counter(movies.length, counterSettings)
    .on('charged', function (charge, count, message) {
      console.log(`${this.finished}/${this.total}   ${charge}   ${message|| ''}`);
    })
    .on('finished', function () {
      dbSave('omdb', database);
      console.log(counter.toString());
      callback(null, folders);
    });

  movies.forEach(function (movie) {
    let message = `${movie.name}.${movie.ext}`;
    let cachedData = database[movie.name];
    if (cachedData !== undefined) {
      Object.assign(movie, cachedData);
      return counter.charge('cached', message);
    }

    let url = `http://www.omdbapi.com/?t=${movie.name.replace(' ','+')}&y=${movie.year}&plot=short&r=json`;

    http.get(url, function (res) {
      var data = '';
      if (res.statusCode < 200 || res.statusCode > 299) {
        return counter.charge('error', message);
      }
      res.on('data', (chunk) => (data += chunk));
      res.on('end', function () {
        let omdbData;
        try {
          omdbData = omdbResultFactory(JSON.parse(data));
          database[movie.name] = omdbData;
          if (omdbData) {
            Object.assign(movie, omdbData);
            counter.charge('found', message);
          } else {
            counter.charge('notFound', message);
          }
        } catch (e) {
          counter.charge('error', message);
        }
      });
    }).on('error', function () {
      counter.charge('error', message);
    });
  });
};
