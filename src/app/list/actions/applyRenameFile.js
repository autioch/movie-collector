import { join } from 'path';
import { CATEGORIES } from '../../../tools/categorize/fileTypes';

export default function applyRenameFile({ state, data: itemId }) {
  return {
    videoList: state.videoList.map((item) => {
      if (item.id !== itemId) {
        return item;
      }

      const newName = item.suggestion.fullName;

      /* Mutate to also update the item in the tree. */
      item.itemName = newName;
      item.id = join(item.folderPath, newName);

      if (item.category !== CATEGORIES.FOLDER) {
        item.file = {
          ...item.file,
          fileName: newName,
          title: newName
        };
      }

      return item;
    })
  };
}
