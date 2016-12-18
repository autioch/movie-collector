const getItemData = require('./getItemData');
const sortFolderData = require('./sortFolderData');
const flattenFolders = require('./flattenFolders');
const { progressBar } = require('../../utils');

/**
 * Parses given folderPath into and object describing its all contents.
 * @param  {Object} config Application config
 * @return {Promise}       Promise Resolves to object describing its all contents.
 */
module.exports = function scan(config) {
  const { input } = config;

  const bar = progressBar('Scan folder', 1);

  return getItemData(input, '')
    .then((folderData) => sortFolderData(folderData))
    .then((folderData) => flattenFolders(folderData))
    .tap(() => bar.tick());
};
