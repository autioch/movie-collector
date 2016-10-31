const getLanguage = require('./getLanguage');

/**
 * Filters relevant information from an audio stream.
 * @method parseAudioData
 * @param  {object} audioStream Stream from ffProbeData.
 * @return {object} audioData Relevant information about stream.
 */
module.exports = function parseAudioData(audioStream) {
  return {
    codecName: audioStream.codec_name,
    codecLongName: audioStream.codec_long_name,
    profile: audioStream.profile,
    language: getLanguage(audioStream.tags),
    channels: audioStream.channels,
    channelLayout: audioStream.channel_layout
  };
};
