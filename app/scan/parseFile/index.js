const getFilenameData = require('./getFilenameData');
const getCreationTime = require('./getCreationTime');

/**
 * Merges various file data into single object describing file.
 * @param  {fileStats} stats fs.stat result for file
 * @param  {String} folderPath   Full path to the file
 * @param  {String} fileName  Name of the file
 * @return {Object} object
 */
module.exports = function parseFile(stats, folderPath, fileName) {
  return Object.assign({
    path: folderPath,
    file: fileName,
    size: stats.size,
    created: getCreationTime(stats)
  }, getFilenameData(fileName));
};
