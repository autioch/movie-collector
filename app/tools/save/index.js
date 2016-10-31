const fs = require('bluebird').promisifyAll(require('fs'));

module.exports = function save(config, folderData) {
  if (config.output) {
    return fs.writeFileAsync(config.output, JSON.stringify(folderData, null, '  '));
  }
};
