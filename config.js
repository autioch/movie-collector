const path = require('path');

module.exports = {
  prepare: true,
  inputPath: path.join('e:', 'movie'),
  inputCache: path.join(__dirname, 'output', 'videos.json'),
  inputTrim: false,
  ffmpeg: path.join(__dirname, '..', 'ffmpeg'),
  ffmpegForce: true,
  omdb: true,
  omdbForce: true,
  validate: true,
  outputPath: path.join(__dirname, 'output'),
  outputData: false,
  outputUnknown: false,
  outputList: false,
  outputStat: false,
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp']
};
