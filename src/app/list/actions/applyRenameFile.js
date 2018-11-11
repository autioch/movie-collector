import { join } from 'path';
import { CATEGORIES } from '../../../tools/categorize/fileTypes';

export default function applyRenameFile({ state, data: itemId }) {
  return {
    videoList: state.videoList.map((item) => {
      if (item.id !== itemId) {
        return item;
      }

      const newName = item.suggestion.fullName;

      const extras = item.category === CATEGORIES.FOLDER ? {} : {
        file: {
          ...item.file,
          fileName: newName,
          title: newName
        }
      };

      return {
        ...item,
        itemName: newName,
        id: join(item.folderPath, newName),
        ...extras
      };
    })
  };
}
