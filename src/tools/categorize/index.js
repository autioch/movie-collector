import { FILE_TYPES, CATEGORIES } from './fileTypes';

export default function categorize(itemName, extension) {
  const torrentInName = itemName.toLowerCase().indexOf('torrent') > -1;
  const category = FILE_TYPES[extension.toLowerCase()] || CATEGORIES.UNKNOWN;

  return torrentInName || category;
}
