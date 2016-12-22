const path = require('path');

const outputFolder = path.join(__dirname, 'output');

module.exports = {
  input: path.join('e:', 'movie', 'Underworld'),
  // input: path.join(outputFolder, 'filmy.json'),
  output: path.join(outputFolder, 'videos.json'),
  ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  ffmpegForce: true,
  omdb: true,
  omdbForce: true,
  check: true,
  stat: path.join(outputFolder, 'output'),
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp']
};
