import audioStream from './audioStream';
import videoStream from './videoStream';
import subtitleStream from './subtitleStream';

function isVideoStream(stream) {
  return stream.codec_type === 'video';
}

function isAudioStream(stream) {
  return stream.codec_type === 'audio';
}

function isSubtitleStream(stream) {
  return stream.codec_type === 'subtitle';
}

function isUnknownStream(stream) {
  return !isVideoStream(stream) && !isAudioStream(stream) && !isSubtitleStream(stream);
}

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
    generated: new Date().toJSON(),
    formatName: format.format_name,
    formatLongName: format.format_long_name,
    duration: Math.round(format.duration),
    size: format.size,
    bitrate: format.bit_rate,
    probeScore: format.probe_score,
    audio: streams.filter(isAudioStream).map(audioStream),
    video: streams.filter(isVideoStream).map(videoStream),
    subtitle: streams.filter(isSubtitleStream).map(subtitleStream),
    unkown: streams.filter(isUnknownStream)
  };
};
