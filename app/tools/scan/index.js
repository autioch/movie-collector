const getItemData = require('./getItemData');
const sortFolderData = require('./sortFolderData');
const progressBar = require('../../utils/progressBar');

/**
 * Parses given folderPath into and object describing its all contents.
 * @method scan
 * @param  {string} folderPath Folder to parse.
 * @return {promise} Promise Resolves to object describing its all contents.
 */
module.exports = function scan(folderPath) {
  const bar = progressBar('Scan folder', 1);

  return getItemData(folderPath, '')
    .then(sortFolderData)
    .tap(() => bar.tick());
};
