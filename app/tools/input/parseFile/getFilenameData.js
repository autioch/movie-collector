const yearDataSize = 7;
const extensionSize = 3;
const yearSize = 4;

/**
 * Attempts to extract release year, video name and extension from a filename.
 * For filenames with format `[yyyy] name.ext` extracts year and the rest of the filename.
 * @param  {String} fileName Name of a video file
 * @return {Object} object Object containing extension, year and name of video
 */
module.exports = function getFilenameData(fileName) {
  let year;
  let nameOffset = 0;

  if (fileName.startsWith('[')) {
    year = fileName.substr(1, yearSize);
    nameOffset = yearDataSize;
  }

  return {
    ext: fileName.substr(-extensionSize),
    title: fileName.substring(nameOffset, fileName.length - extensionSize - 1),
    year
  };
};
