/**
 * Attempts to extract release year, video name and extension from a filename.
 * For filenames with format `[yyyy] name.ext` extracts year and the rest of the filename.
 * @method getFilenameData
 * @param  {string} fileName Name of a video file
 * @return {object} object Object containing extension, year and name of video
 */
module.exports = function getFilenameData(fileName) {
  let year = undefined;
  let nameOffset = 0;
  if (fileName.startsWith('[')) {
    year = fileName.substr(1, 4);
    nameOffset = 7;
  }
  return {
    ext: fileName.substr(-3),
    name: fileName.substring(nameOffset, fileName.length - 4),
    year
  };
};
