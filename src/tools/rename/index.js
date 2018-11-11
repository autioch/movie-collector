import fs from 'fs';
import { join } from 'path';

export default function rename(parentDir, oldName, newName) {
  if (oldName === newName) {
    return Promise.resolve();
  }

  const copyFrom = join(parentDir, oldName);
  const copyTo = join(parentDir, newName);

  if (fs.existsSync(copyTo)) { // eslint-disable-line no-sync
    return Promise.reject(Error(`File already exists: ${copyTo}`));
  }

  return fs.renameAsync(copyFrom, copyTo);
}
