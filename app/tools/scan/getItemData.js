const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const path = require('path');
const getFileData = require('./getFileData');

/**
 * Generates an object describing folder and its contents
 * @method getFolderData
 * @param  {string} parentFolderPath Path of the folder containg folder
 * @param  {string} folderName Child folder name
 * @return {promise} Promise Resolves to an object containing data.
 */
function getFolderData(parentFolderPath, folderName) {
  const folderPath = path.join(parentFolderPath, folderName);
  return fs
    .readdirAsync(folderPath)
    .map(item => getItemData(folderPath, item))
    .filter(item => !!item)
    .then(items => ({
      path: parentFolderPath,
      name: folderName,
      items: items
    }));
}

/**
 * Generates an object describing item.
 * @method readItem
 * @param  {string} parentFolderPath Path of the folder containg item
 * @param  {string} itemName Item to describe.
 * @return {promise} Promise Resolves to and object containing data.
 */
function getItemData(parentFolderPath, itemName) {
  return fs.statAsync(path.join(parentFolderPath, itemName))
    .then(function(stats) {
      if (stats.isFile()) {
        return getFileData(stats, parentFolderPath, itemName);
      }
      if (stats.isDirectory()) {
        return getFolderData(parentFolderPath, itemName);
      }
      return bluebird.resolve();
    });
}

module.exports = getItemData;
