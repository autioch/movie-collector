const path = require('path');

const outputFolder = path.join(__dirname, 'output');

module.exports = {
  prepare: true,
  // input: path.join('e:', 'movie'),
  input: path.join(outputFolder, 'videos.json'),
  output: path.join(outputFolder, 'videos.json'),
  ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  ffmpegForce: true,
  omdb: true,
  omdbForce: true,
  check: true,
  stat: path.join(outputFolder, 'stats.json'),
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp']
};
