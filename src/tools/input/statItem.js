import path from 'path';
import bluebird from 'bluebird';
import rawFs from 'fs';

const fs = bluebird.promisifyAll(rawFs);

export default function statItem(folderPath, itemName) {
  return fs
    .statAsync(path.join(folderPath, itemName))
    .then((stats) => ({
      folderPath,
      itemName,
      stats,
      isDirectory: stats.isDirectory(),
      isFile: stats.isFile()
    }))
    .catch(() => ({
      folderPath,
      itemName,
      isDirectory: false,
      isFile: false
    }));
}
