import getFilenameData from './getFilenameData';
import getCreationTime from './getCreationTime';

let nextId = 1;

/**
 * Formats file data into better shaped object.
 * @param  {Object} itemData Raw data.
 * @return {Object}          Formatted data.
 */
export default function parseFile(itemData) {
  const { folderPath, itemName, stats } = itemData;
  const { title, year, ext } = getFilenameData(itemName);

  return {
    id: nextId++,
    title,
    year,
    file: {
      ext,
      folder: folderPath,
      name: itemName,
      size: stats.size,
      created: getCreationTime(stats),
      generated: new Date().toJSON()
    }
  };
};
