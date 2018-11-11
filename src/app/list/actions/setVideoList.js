/* eslint-disable no-use-before-define */
import { CATEGORIES } from '../../../tools/categorize/fileTypes';

function itemRequiresRename(item, ignoreCamelCase) {
  const originalName = item.category === CATEGORIES.FOLDER ? item.itemName : item.file.title;
  const suggestion = item.suggestion.fullName;

  if (ignoreCamelCase) {
    return originalName.toLowerCase() !== suggestion.toLowerCase();
  }

  return originalName !== suggestion;
}

function getFolderItems(folder, showOnlyRenames, ignoreCamelCase) {
  const folderItems = folder.items.reduce((arr, item) => {
    if (item.isFile) {
      if (showOnlyRenames) {
        return itemRequiresRename(item, ignoreCamelCase) ? arr.concat(item) : arr;
      }

      return arr.concat(item);
    }

    if (!item.isDirectory) {
      return arr;
    }

    const subFolderItems = getFolderItems(item, showOnlyRenames, ignoreCamelCase);

    if (subFolderItems.length) {
      return arr.concat(subFolderItems);
    }

    return arr;
  }, []);

  if (folderItems.length) {
    return [folder].concat(folderItems);
  }

  if (itemRequiresRename(folder, ignoreCamelCase)) {
    return [folder];
  }

  return [];
}

function flattenTree(videoTree, showOnlyRenames, ignoreCamelCase) {
  return videoTree.reduce((arr, item) => {
    if (item.isDirectory) {
      return arr.concat(getFolderItems(item, showOnlyRenames, ignoreCamelCase));
    }

    if (!item.isFile) {
      return arr;
    }

    if (!showOnlyRenames) {
      return arr.concat(item);
    }

    return itemRequiresRename(item, ignoreCamelCase) ? arr.concat(item) : arr;
  }, []);
}

export default function setVideoList({ state: { showOnlyRenames, ignoreCamelCase, videoTree } }) {
  const videoList = flattenTree(videoTree, showOnlyRenames, ignoreCamelCase);

  return {
    videoList,
    isSearching: false
  };
}
