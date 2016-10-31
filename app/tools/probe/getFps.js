/**
 * Attempts to convert frame rate to fps.
 * @method getFps
 * @param  {string} r_frame_rate r_frame_rate property of a video stream
 * @return {number} fps Fps if conversion successfull, -1 otherwise.
 */
module.exports = function getFps(r_frame_rate) {
  const parts = r_frame_rate.split('/');
  if (parts.length > 0) {
    return Math.round(parts[0] / parts[1]);
  }
  const other = parseInt(r_frame_rate, 10);
  if (!isNaN(other)) {
    return other;
  }
  return -1;
};
