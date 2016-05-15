const bluebird = require('bluebird');
const cacheSave = require('./app/utils/cacheSave');
const app = require('./app');
const config = reqAbs('config');

process.env.FFMPEG_PATH = config.paths.ffmpeg;
process.env.FFPROBE_PATH = config.paths.ffprobe;

console.log('Paths: ');
console.log(process.env.FFMPEG_PATH);
console.log(process.env.FFPROBE_PATH);

bluebird.reduce(app.steps, function(prev, step) {
  return step.method(prev).tap(data => cacheSave(step.key, data));
}, app.startingValue);
