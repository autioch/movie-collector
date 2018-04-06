const seconds = 60;

const maxDurationDiff = 15;

const label = 'Different duration';

/**
 * Checks if duration difference is within acceptable range.
 * @param  {Number} minutes1 First duration in minutes.
 * @param  {Number} minutes2 Second duration in minutes.
 * @return {Boolean}         True if durations are similar, false otherwise.
 */
function differentDurations(minutes1, minutes2) {
  return Math.abs(minutes1 - minutes2) > maxDurationDiff;
}

/**
 * Checks video data for different durations reported by ffmpeg and omdb.
 * @param  {Object} videoData Data of a video to check.
 * @return {mixed}            False if durations are similar, object with report otherwise.
 */
module.exports = function checkMixed(videoData) {
  const { omdb, ffmpeg } = videoData;

  if (omdb && omdb.runtime && ffmpeg && ffmpeg.duration) {
    const omdbMinutes = omdb.runtime;
    const ffmpegMinutes = Math.floor(ffmpeg.duration / seconds);

    if (differentDurations(omdbMinutes, ffmpegMinutes)) {
      return {
        label,
        omdbMinutes,
        ffmpegMinutes
      };
    }
  }

  return false;
};
