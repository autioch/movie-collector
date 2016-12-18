const path = require('path');

const outputFolder = path.join(__dirname, 'data');

module.exports = {
  input: path.join('e:', 'movie', 'Underworld'),
  // input: path.join(outputFolder, 'filmy.json'),
  output: path.join(outputFolder, 'filmy.json'),
  stat: path.join(outputFolder, 'filmy_stats.json'),
  check: true,
  ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  // ffmpegForce: true,
  omdb: true,
  // omdbForce: true,
  // verbose: true,
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp']
};
