const getLanguage = require('./getLanguage');
const getFps = require('./getFps');

/**
 * Filters relevant information from a video stream.
 * @param  {Object} videoStream Stream from ffProbeData.
 * @return {Object} videoData Relevant information about stream.
 */
module.exports = function parseVideoData(videoStream) {
  return {
    codecName: videoStream.codec_name,
    codecLongName: videoStream.codec_long_name,
    profile: videoStream.profile,
    width: videoStream.width,
    height: videoStream.height,
    hasBFrames: videoStream.has_b_frames,
    displayAspectRatio: videoStream.display_aspect_ratio,
    pixFmt: videoStream.pix_fmt,
    level: videoStream.level,
    isAvc: videoStream.is_avc,
    duration: videoStream.duration,
    language: getLanguage(videoStream.tags),
    fps: getFps(videoStream.r_frame_rate)
  };
};
