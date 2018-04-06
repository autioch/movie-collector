/* eslint-disable no-use-before-define */
import path from 'path';
import bluebird from 'bluebird';
import rawFs from 'fs';
import parseFile from './parseFile';

const fs = bluebird.promisifyAll(rawFs);

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

export default scanFolder;
