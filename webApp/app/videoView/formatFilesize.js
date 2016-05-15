const filesize = require('filesize');

const filesizeSettings = {
  base: 2,
  exponent: 2,
  round: 0,
  output: 'object'
};

export default function formatFilesize(fileSize) {
  return Math.round(filesize(fileSize, filesizeSettings).value);
}
