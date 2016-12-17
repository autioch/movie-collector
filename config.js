const path = require('path');

module.exports = {
  input: path.join(__dirname, 'input', 'filmy.json'),
  // input: path.join('g:', 'filmy'),
  output: path.join(__dirname, 'dist', 'filmy.json'),
  // ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  // ffmpegForce: true,
  // omdb: true,
  // omdbForce: true,
  // stat: path.join(__dirname, 'output'),
  check: path.join(__dirname, 'dist', 'filmy_check.json'),
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp']
  // verbose: true
};
