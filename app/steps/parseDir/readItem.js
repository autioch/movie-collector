const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const path = require('path');
const parseFilename = require('./parseFilename');
const parseCreationTime = require('./parseCreationTime');

function parseFile(stats, dir, name) {
  return Object.assign({
    path: dir,
    file: name,
    size: stats.size,
    created: parseCreationTime(stats)
  }, parseFilename(name));
}

function parseFolder(dir, name) {
  const folderPath = path.join(dir, name);
  return fs
    .readdirAsync(folderPath)
    .map(item => readItem(folderPath, item))
    .filter(item => !!item)
    .then(items => ({
      path: dir,
      name: name,
      items: items
    }));
}

function readItem(dir, name) {
  return fs.statAsync(path.join(dir, name))
    .then(function(stats) {
      if (stats.isFile()) {
        return parseFile(stats, dir, name);
      }
      if (stats.isDirectory()) {
        return parseFolder(dir, name);
      }
      return bluebird.resolve();
    });
}

module.exports = readItem;
