const path = require('path');

module.exports = {
  prepare: true,

  inputPath: [
    path.join('g:')
  ],
  inputCache: path.join(__dirname, 'output', 'cache.json'),

  // inputTrim: true,
  ffmpeg: path.join(__dirname, 'ffmpeg'),
  omdb: true,
  omdbApiKey: '________',

  // ffmpegForce: true,
  // omdbForce: true,
  // napiProject: true,
  minify: true,
  validate: true,
  outputPath: path.join(__dirname, 'output'),

  outputList: true,
  outputData: true,
  outputUnknown: true,
  outputStat: true,

  outputErrors: true,
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
  ignoredFormats: ['jpg', 'bmp', 'png']
};
