/**
 * List of fields containing dates of creaton/manipulation in stat
 */
const fields = ['atime', 'mtime', 'ctime', 'birthtime'];

// "atime": "2016-04-11T16:03:40.347Z",
// "mtime": "2016-04-11T16:08:55.349Z",
// "ctime": "2016-04-11T16:08:55.349Z",
// "birthtime": "2016-04-11T16:03:40.347Z"

/**
 * Extracts lowest date found in given fileStats
 * @method getCreationTime
 * @param  {filestats} fileStats fs.stat result for file
 * @return {Date} creationTime First date noted for a file
 */
module.exports = function getCreationTime(fileStats) {
  const times = fields.map(field => fileStats[field].getTime());
  return new Date(Math.min.apply(null, times));
};
