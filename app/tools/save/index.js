const fs = require('bluebird').promisifyAll(require('fs'));
const { verbose } = require('../../utils');

/**
 * Saves scan output to file for later reuse insted of another scan.
 * @param  {Object} config     Application config
 * @param  {Object} folderData Data for all videos with folder structure saved.
 * @return {Promise}           Promise resolving when data is saved.
 */
module.exports = function save(config, folderData) {
  if (!config.output) {
    verbose('TOOL SAVE', 'Disabled');

    return;
  }
  verbose('TOOL SAVE', config.output);

  return fs
    .writeFileAsync(config.output, JSON.stringify(folderData, null, '  '))
    .tap(() => verbose('TOOL SAVE', 'Done'));
};
