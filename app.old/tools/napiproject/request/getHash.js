const md5pf = require('md5-part-file');
const Bluebird = require('bluebird');
const path = require('path');

const KB = 1024;
const MB = KB * KB;
const REQUIRED_MB = 10;
const HEADER_SIZE = REQUIRED_MB * MB;

module.exports = function getHash(videoData) {
  const { file: { folder, name } } = videoData;
  const fullName = path.join(folder, name);

  return new Bluebird((resolve) => {
    md5pf(fullName, 0, HEADER_SIZE, (err, hash) => {
      resolve(err ? '' : hash);
    });
  });
};
