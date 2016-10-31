const getFilenameData = require('./getFilenameData');
const getCreationTime = require('./getCreationTime');

/**
 * Merges various file data into single object describing file.
 * @method getFileData
 * @param  {fileStats} stats fs.stat result for file
 * @param  {string} folderPath   Full path to the file
 * @param  {string} fileName  Name of the file
 * @return {object} object
 */
module.exports = function getFileData(stats, folderPath, fileName) {
  return Object.assign({
    path: folderPath,
    file: fileName,
    size: stats.size,
    created: getCreationTime(stats)
  }, getFilenameData(fileName));
};
