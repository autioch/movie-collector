const fields = ['atime', 'mtime', 'ctime', 'birthtime'];

module.exports = function parseCreationTime(stats) {
  const times = fields.map(field => stats[field].getTime());
  return new Date(Math.min.apply(null, times));
};

// "atime": "2016-04-11T16:03:40.347Z",
// "mtime": "2016-04-11T16:08:55.349Z",
// "ctime": "2016-04-11T16:08:55.349Z",
// "birthtime": "2016-04-11T16:03:40.347Z"
