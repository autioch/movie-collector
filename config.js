const path = require('path');

module.exports = {
  rootPath: 'g:/filmy',
  formats: {
    video: ['avi', 'mp4', 'mkv', 'm4v'],
    subtitle: ['srt', 'txt', 'sub', 'idx'],
    ignore: ['jpg', 'bmp']
  },
  paths: {
    ffmpeg: path.join(__dirname, 'ffmpeg', 'bin', 'ffmpeg.exe'),
    ffprobe: path.join(__dirname, 'ffmpeg', 'bin', 'ffprobe.exe')
  },
  steps: [
    'parseDir',
    'parseVideo',
    'ffProbe',
    'queryOmdb',
    'stat'
  ]
};
