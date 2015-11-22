'use strict';

let videoFolderFactory = requireFrom('app/factories/videoFolder');

module.exports = function (folders, callback) {
  return callback(null, folders.map(videoFolderFactory));
};
