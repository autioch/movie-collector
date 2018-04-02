const yearDataSize = 7;
const extensionSize = 3;
const yearSize = 4;

const NAME_REGEX = /^\[(\d\d\d\d)\] (.+)\.([a-z0-9]+)$/i;

/**
 * Attempts to extract release year, video name and extension from a filename.
 * For filenames with format `[yyyy] name.ext` extracts year and the rest of the filename.
 * @param  {String} fileName Name of a video file
 * @return {Object} object Object containing extension, year and name of video
 */
module.exports = function getFilenameData(fileName) {
  let year;
  let nameOffset = 0;

  if (NAME_REGEX.test(fileName)) {
    year = parseInt(fileName.substr(1, yearSize), 10);
    nameOffset = yearDataSize;
  }

  return {
    ext: fileName.substr(-extensionSize),
    title: fileName.substring(nameOffset, fileName.length - extensionSize - 1),
    year
  };
};
