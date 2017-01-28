const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const parseFile = require('./parseFile');
const sortFiles = require('./sortFiles');

function scanFolder(folderPath) {
  return fs
    .readdirAsync(folderPath)
    .map((itemName) => statItem(folderPath, itemName))
    .then(parseFolderItems)
    .catch((err) => {
      console.log(err);

      return {
        videos: [],
        other: []
      };
    });
}

function parseFolderItems(items) {
  const folders = items.filter((item) => item.stats.isDirectory()).map((item) => path.join(item.folderPath, item.itemName));
  const files = items.filter((item) => item.stats.isFile()).map(parseFile);
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

function statItem(folderPath, itemName) {
  return fs
    .statAsync(path.join(folderPath, itemName))
    .then((stats) => ({
      folderPath,
      itemName,
      stats
    }));
}

module.exports = scanFolder;
