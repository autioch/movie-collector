import fs from 'fs';
import { join } from 'path';

export default function rename(parentDir, oldName, newName) {
  if (oldName === newName) {
    return Promise.resolve();
  }

  const copyFrom = join(parentDir, oldName);
  const copyTo = join(parentDir, newName);

  return fs.renameAsync(copyFrom, copyTo);
}
