import { join } from 'path';
import bluebird from 'bluebird';
import rawFs from 'fs';

const fs = bluebird.promisifyAll(rawFs);

export default function statItem(folderPath, itemName, depth) {
  return fs
    .statAsync(join(folderPath, itemName))
    .then((stats) => ({
      id: join(folderPath, itemName),
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
