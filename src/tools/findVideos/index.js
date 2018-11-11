/* eslint-disable no-use-before-define */
import path from 'path';
import bluebird from 'bluebird';
import rawFs from 'fs';
import parseFile from './parseFile';
import statItem from './statItem';
import suggestRename from '../suggestRename';
import { CATEGORIES } from '../categorize/fileTypes';

const fs = bluebird.promisifyAll(rawFs);

function parseFolderItems(items, depth) {
  const files = items.filter((item) => item.isFile).map((item) => parseFile(item));
  const subFolders = items.filter((item) => item.isDirectory);

  return bluebird
    .map(subFolders, (subFolder) => parseSubFolder(subFolder, depth + 1), {
      concurrency: 3
    })
    .then((parsedSubFolders) => parsedSubFolders.concat(files));
}

function parseSubFolder(folder, depth) {
  return scanFolder(path.join(folder.folderPath, folder.itemName), depth).then((items) => ({
    ...folder,
    category: CATEGORIES.FOLDER,
    suggestion: suggestRename(folder.itemName),
    items
  }));
}

function scanFolder(folderPath, depth) {
  return fs
    .readdirAsync(folderPath)
    .map((itemName) => statItem(folderPath, itemName, depth))
    .then((items) => parseFolderItems(items, depth))
    .catch(() => []);
}

export default function setup() {
  return (folderPath) => scanFolder(folderPath, 0);
}
