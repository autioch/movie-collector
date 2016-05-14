const fs = require('bluebird').promisifyAll(require('fs'));

module.exports = function cacheSave(fileName, data) {
  const stringified = JSON.stringify(data, null, '  ');
  const file = `./cache/${fileName}.json`;
  return fs.writeFileAsync(file, stringified);
};
