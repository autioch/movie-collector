import rename from '../../../tools/rename';
import { CATEGORIES } from '../../../tools/categorize/fileTypes';
import { message } from 'antd';

export default function renameFile({ state, data: itemId, store }) {
  const itemToRename = state.videoList.find((item) => item.id === itemId);

  const parentDir = itemToRename.folderPath;
  const oldName = itemToRename.itemName;
  let newName = itemToRename.suggestion.fullName;

  if (itemToRename.category !== CATEGORIES.FOLDER) {
    newName = `${newName}.${itemToRename.file.ext}`;
  }

  rename(parentDir, oldName, newName)
    .then(() => store.applyRenameFile(itemId))
    .then(() => message.info('Rename successful'))
    .catch((err) => message.error(err.message)); // eslint-disable-line no-alert
}
