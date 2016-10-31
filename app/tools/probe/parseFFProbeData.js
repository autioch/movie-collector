const parseAudioData = require('./parseAudioData');
const parseVideoData = require('./parseVideoData');

/**
 * Parses result of a ffprobe into more friendly format.
 * If more than 1 video stream is found in a probe, exception is thrown.
 * Multiple audio streams are acceptable.
 * @method parseFFProbeData
 * @param  {object} ffProbeData Result of ffprobe.
 * @return {object} data Data describing probed video.
 */
module.exports = function parseFFProbeData(ffProbeData) {
  const data = {
    formatName: ffProbeData.format.format_name,
    formatLongName: ffProbeData.format.format_long_name,
    duration: ffProbeData.format.duration,
    size: ffProbeData.format.size,
    bitrate: ffProbeData.format.bit_rate,
    probeScore: ffProbeData.format.probe_score,
    audio: []
  };

  let videoStreamFound = false;

  ffProbeData.streams.forEach(function(stream) {
    if (stream.codec_type === 'video') {
      if (videoStreamFound) {
        throw 'Found multiple video streams in a ffrProbe data.';
      }
      videoStreamFound = true;
      data.video = parseVideoData(stream);
      return;
    }
    if (stream.codec_type === 'audio') {
      data.audio.push(parseAudioData(stream));
    }
  });
  return data;
};
