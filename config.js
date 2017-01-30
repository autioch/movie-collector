const path = require('path');

module.exports = {
  prepare: true,
  // inputPath: path.join('g:', 'filmy'),
  inputCache: path.join(__dirname, 'output', 'data.json'),
  // inputTrim: true,
  // ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  // ffmpegForce: true,
  // omdb: true,
  // omdbForce: true,
  minify: false,
  validate: true,
  outputPath: path.join(__dirname, 'output'),
  outputData: true,
  outputUnknown: true,
  outputList: true,
  outputStat: true,
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp']
};
