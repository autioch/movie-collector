const getFilenameData = require('./getFilenameData');
const getCreationTime = require('./getCreationTime');

module.exports = function parseFile(itemData) {
  const { folderPath, itemName, stats } = itemData;
  const { title, year, ext } = getFilenameData(itemName);

  return {
    title,
    year,
    file: {
      ext,
      folder: folderPath,
      name: itemName,
      size: stats.size,
      created: getCreationTime(stats)
    }
  };
};
