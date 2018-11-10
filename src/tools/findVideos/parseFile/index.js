import getFilenameData from './getFilenameData';
import getCreationTime from './getCreationTime';

/**
 * Formats file data into better shaped object.
 * @param  {Object} itemData Raw data.
 * @return {Object}          Formatted data.
 */
export default function parseFile(itemData) {
  const { itemName, stats } = itemData;
  const filenameData = getFilenameData(itemName);

  return {
    ...itemData,
    file: {
      ...filenameData,
      size: stats.size,
      created: getCreationTime(stats),
      generated: new Date().toJSON()
    }
  };
}
