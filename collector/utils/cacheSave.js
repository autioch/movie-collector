const fs = require('bluebird').promisifyAll(require('fs'));

module.exports = function cacheSave(fileName, data, format = 'json') {
  const stringified = JSON.stringify(data, null, '  ');
  const file = `./dist/data/${fileName}.${format}`;
  return fs.writeFileAsync(file, stringified);
};
