import getFilenameData from './getFilenameData';
import getCreationTime from './getCreationTime';
import categorize from '../../categorize';
import suggestRename from '../../suggestRename';

/**
 * Formats file data into better shaped object.
 * @param  {Object} itemData Raw data.
 * @return {Object}          Formatted data.
 */
export default function parseFile(itemData) {
  const { itemName, stats } = itemData;
  const { ext, year, title, fileName } = getFilenameData(itemName);
  const category = categorize(itemName, ext);

  return {
    ...itemData,
    category,
    suggestion: suggestRename(fileName),
    file: {
      ext,
      year,
      title,
      fileName,
      size: stats.size,
      created: getCreationTime(stats),
      generated: new Date().toJSON()
    }
  };
}
