import getLanguage from './getLanguage';

/**
 * Filters relevant information from a subtitle stream.
 * @param  {Object} subtitleStream Stream from ffProbeData.
 * @return {Object} subtitleData Relevant information about stream.
 */
module.exports = function parseSubtitleStream(subtitleStream) {
  const { disposition } = subtitleStream;

  return {
    codecName: subtitleStream.codec_name,
    codecLongName: subtitleStream.codec_long_name,
    profile: subtitleStream.profile,
    language: getLanguage(subtitleStream.tags),
    disposition: Object.keys(disposition).filter((key) => disposition[key])
  };
};
