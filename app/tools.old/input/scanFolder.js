const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const parseFile = require('./parseFile');
const sortFiles = require('./sortFiles');

/**
 * Extracts videos and other files from folder and its subfolders
 * @param  {String} folderPath Path of the folder.
 * @return {Object}            Object containing videos and other files.
 */
function scanFolder(folderPath) {
  return fs
    .readdirAsync(folderPath)
    .map((itemName) => statItem(folderPath, itemName))
    .then(parseFolderItems)
    .catch(() => ({
      videos: [],
      other: []
    }));
}

/**
 * Parses folder contents. Subfolder contents are merged into results.
 * @param  {Array} items List of items inside the folder.
 * @return {Object}      Object containing videos and other files.
 */
function parseFolderItems(items) {
  const readItems = items.filter((item) => !!item);
  const folders = readItems.filter((item) => item.stats.isDirectory()).map((item) => path.join(item.folderPath, item.itemName));
  const files = readItems.filter((item) => item.stats.isFile()).map(parseFile);
  const { videos, other } = sortFiles(files);

  return bluebird
    .map(folders, scanFolder)
    .each((sortedFiles) => {
      videos.push(...sortedFiles.videos);
      other.push(...sortedFiles.other);
    })
    .then(() => ({
      videos,
      other
    }));
}

/**
 * Collects information about folder item.
 * @param  {String} folderPath Path of the folder.
 * @param  {String} itemName   Name of the item inside the folder.
 * @return {Object}            Details of the item.
 */
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

module.exports = scanFolder;
