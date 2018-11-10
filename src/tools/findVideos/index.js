/* eslint-disable no-use-before-define */
import path from 'path';
import bluebird from 'bluebird';
import rawFs from 'fs';
import parseFile from './parseFile';
import statItem from './statItem';
import flattenInput from './flattenInput';

const fs = bluebird.promisifyAll(rawFs);

function parseFolderItems(items) {
  const files = items.filter((item) => item.isFile).map(parseFile);
  const subFolders = items.filter((item) => item.isDirectory);

  return bluebird
    .map(subFolders, parseSubFolder, {
      concurrency: 3
    })
    .then((parsedSubFolders) => parsedSubFolders.concat(files));
}

function parseSubFolder(folder) {
  return scanFolder(path.join(folder.folderPath, folder.itemName)).then((items) => ({
    ...folder,
    items
  }));
}

function scanFolder(folderPath) {
  return fs
    .readdirAsync(folderPath)
    .map((itemName) => statItem(folderPath, itemName))
    .then(parseFolderItems)
    .catch(() => []);
}

export default function setup() {
  return (folderPath) => scanFolder(folderPath).then(flattenInput);
}
