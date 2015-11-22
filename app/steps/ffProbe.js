'use strict';

let ffmpeg = require('fluent-ffmpeg');
let config = requireFrom('app/config');
let Counter = requireFrom('app/counter');
let ffprobeFactory = requireFrom('app/factories/ffprobe');

process.env.FFMPEG_PATH = config.paths.ffmpeg;
process.env.FFPROBE_PATH = config.paths.ffprobe;

const counterSettings = {
  good: 0,
  fail: 0
};

module.exports = function (folders, callback) {

  let movies = [];
  folders.forEach(function (folder) {
    folder.videos.forEach((movie) => movies.push(movie));
  });

  let counter = new Counter(movies.length, counterSettings)
    .on('charged:good', function (count, message) {
      console.log(`${this.finished}/${this.total}   ----   ${message}`);
    })
    .on('charged:fail', function (count, message) {
      console.log(`${this.finished}/${this.total}   Fail   ${message}`);
    })
    .on('finished', function () {
      console.log(counter.toString());
      callback(null, folders);
    });

  movies.forEach(function (file) {
    ffmpeg.ffprobe(file.path, function (err, metadata) {
      if (!err) {
        Object.assign(file, ffprobeFactory(metadata));
      }
      counter.charge(err ? 'fail' : 'good', `${file.name}.${file.ext}`);
    });
  });
};
