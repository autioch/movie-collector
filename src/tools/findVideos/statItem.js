import { join } from 'path';
import bluebird from 'bluebird';
import rawFs from 'fs';

const fs = bluebird.promisifyAll(rawFs);

export default function statItem(folderPath, itemName, depth) {
  const fullPath = join(folderPath, itemName);

  return fs
    .statAsync(fullPath)
    .then((stats) => ({
      id: fullPath,
      folderPath,
      itemName,
      stats,
      depth,
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
