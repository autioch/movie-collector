/**
 * Attempts to convert frame rate to fps.
 * @param  {String} rFrameRate r_frame_rate property of a video stream
 * @return {number} fps Fps if conversion successfull, -1 otherwise.
 */
module.exports = function getFps(rFrameRate) {
  const parts = rFrameRate.split('/');

  if (parts.length > 0) {
    return Math.round(parts[0] / parts[1]);
  }
  const other = parseInt(rFrameRate, 10);

  if (!isNaN(other)) {
    return other;
  }

  return -1;
};
