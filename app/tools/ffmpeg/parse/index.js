const audioStream = require('./audioStream');
const videoStream = require('./videoStream');

/**
 * Parses result of a ffprobe into more friendly format.
 * If more than 1 video stream is found in a probe, exception is thrown.
 * Multiple audio streams are acceptable.
 * @param  {Object} ffProbeData Result of ffprobe.
 * @return {Object} data Data describing probed video.
 */
module.exports = function parseFFProbeData(ffProbeData) {
  const { format, streams } = ffProbeData;

  return {
    formatName: format.format_name,
    formatLongName: format.format_long_name,
    duration: Math.round(format.duration),
    size: format.size,
    bitrate: format.bit_rate,
    probeScore: format.probe_score,
    audio: streams.filter((stream) => stream.codec_type === 'audio').map(audioStream),
    video: streams.filter((stream) => stream.codec_type === 'video').map(videoStream)
  };
};
