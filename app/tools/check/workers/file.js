/**
 * Checks basic filename info.
 * @param  {Object} videoData Data of a video to check.
 * @return {mixed}            Information about errors.
 */
module.exports = function checkFile(videoData) {
  if (!videoData.year) {
    return { label: 'No year in file name' };
  }
};
