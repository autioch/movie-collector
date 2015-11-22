'use strict';

let fs = require('fs');
let path = require('path');
let filesize = require('filesize');

const filesizeSettings = {
  base: 2,
  exponent: 2,
  round: 0,
  output: 'object'
};

module.exports = function (folderPath, fileName) {
  let filePath = path.join(folderPath, fileName);
  let fileInfo = fs.lstatSync(filePath);
  if (!fileInfo.isFile()) {
    return false;
  }

  let fileObject = {
    year: '',
    name: '',
    ext: fileName.substr(-3),
    sizeMB: filesize(fileInfo.size, filesizeSettings).value,
    size: fileInfo.size,
    path: filePath,
    fileInfo: fileInfo
  };

  if (fileName.startsWith('[')) {
    fileObject.year = fileName.substr(1, 4);
    fileObject.name = fileName.substring(7, fileName.length - 4);
  } else {
    fileObject.name = fileName.substring(0, fileName.length - 4);
  }
  return fileObject;
};
