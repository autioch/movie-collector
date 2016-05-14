const filesize = require('filesize');

const filesizeSettings = {
  base: 2,
  exponent: 2,
  round: 0,
  output: 'object'
};

module.exports = function formatFilesize(fileSize) {
  return filesize(fileSize, filesizeSettings);
};
