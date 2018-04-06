/* eslint no-process-env: 0 */
const path = require('path');
const { getTicker, curry } = require('../../utils');
const bluebird = require('bluebird');
const ffProbeAsync = bluebird.promisify(require('fluent-ffmpeg').ffprobe);
const parse = require('./parse');

const MAX_PROBES = 3;

const ffmpegProbeFactory = curry(
  (ffmpegPath, videoPath) => {
  /* Fluent ffmpeg requires these. */
    process.env.FFMPEG_PATH = path.join(ffmpegPath, 'bin', 'ffmpeg.exe');
    process.env.FFPROBE_PATH = path.join(ffmpegPath, 'bin', 'ffprobe.exe');

    return ffProbeAsync(videoPath)
      .then((data) => parse(data))
      .catch((error) => error);
  }
);

const probeVideo = curry(
  (ffmpegProbe, ticker, video) => ffmpegProbe(video)
    .then((probeData) => Object.assign(video, {
      ffmpeg: probeData
    }))
    .tap(ticker)
);

module.exports = curry(
  ({ ffmpeg, ffmpegForce }, videos) => {
    const videosToQuery = ffmpegForce ? videos : videos.filter((video) => !video.ffmpeg || video.ffmpeg.error);
    const ffmpegProbe = ffmpegProbeFactory(ffmpeg);
    const ticker = getTicker('ffProbe', videosToQuery.length);

    return bluebird
      .map(videosToQuery, probeVideo(ffmpegProbe, ticker), {
        concurrency: MAX_PROBES
      })
      .then(() => videos);
  }
);
