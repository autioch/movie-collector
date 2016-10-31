const path = require('path');

module.exports = {
  input: path.join(__dirname, 'output', 'fullData.json'),
  // input: path.join('e:', 'movie'),
  output: path.join(__dirname, 'output', 'fullData.json'),
  ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  // ffmpegForce: true,
  omdb: true,
  // omdbForce: true,
  stat: path.join(__dirname, 'output', 'stats.json'),
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp'],
};
