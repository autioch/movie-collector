const getItemData = require('./getItemData');
const sortFolderData = require('./sortFolderData');
const { progressBar, verbose } = require('../../../utils');

/**
 * Parses given folderPath into and object describing its all contents.
 * @param  {Object} config Application config
 * @return {Promise}       Promise Resolves to object describing its all contents.
 */
module.exports = function scan(config) {
  verbose('TOOL SCAN', config.input);
  const bar = progressBar('Scan folder', 1);

  return getItemData(config.input, '')
    .tap(() => verbose('TOOL SCAN', 'Scanned'))
    .then((folderData) => sortFolderData(config, folderData))
    .tap(() => verbose('TOOL SCAN', 'Cleaned up'))
    .tap(() => bar.tick());
};
