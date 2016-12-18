const parseAudioData = require('./parseAudioData');
const parseVideoData = require('./parseVideoData');

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
    duration: format.duration,
    size: format.size,
    bitrate: format.bit_rate,
    probeScore: format.probe_score,
    audio: streams.filter((stream) => stream.codec_type === 'audio').map(parseAudioData),
    video: streams.filter((stream) => stream.codec_type === 'video').map(parseVideoData)
  };
};
