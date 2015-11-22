'use strict';

var fs = require('fs');

console.log('-- Movie Collector Installation');

console.log('-- Creating folder structure');
['cache', 'database', 'output', 'ffmpeg'].forEach(function (folder) {
  let dir = `./${folder}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

[
  '-- Done!'
].forEach(function (message) {
  console.log(message);
});
