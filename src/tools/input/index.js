/* eslint-disable no-use-before-define */
const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const parseFile = require('./parseFile');

function parseFolderItems(items) {
  const readItems = items.filter((item) => !!item);
  const files = readItems.filter((item) => item.stats.isFile()).map(parseFile);

  const subFolders = readItems
    .filter((item) => item.stats.isDirectory())
    .map((item) => path.join(item.folderPath, item.itemName));

  return bluebird
    .map(subFolders, scanFolder)
    .reduce((allFiles, subFolderFiles) => allFiles.concat(subFolderFiles), files);
}

function statItem(folderPath, itemName) {
  return fs
    .statAsync(path.join(folderPath, itemName))
    .then((stats) => ({
      folderPath,
      itemName,
      stats
    }))
    .catch(() => false);
}

function scanFolder(folderPath) {
  return fs
    .readdirAsync(folderPath)
    .map((itemName) => statItem(folderPath, itemName))
    .then(parseFolderItems)
    .catch(() => ({
      files: []
    }));
}

module.exports = scanFolder;
