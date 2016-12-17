const verbose = require('./verbose');

/**
 * Flattens folderData into an array of videos in folders and subfolders.
 * @param  {Object} folderData Object returned by scan tool.
 * @return {Array}             Array of videos found in folders.
 */
function scanFolder(folderData) {
  let videos = [];

  function concat(toAdd) {
    videos = videos.concat(toAdd);
  }

  if (folderData.videos) {
    concat(folderData.videos);
  }
  if (folderData.subFolders) {
    folderData.subFolders.forEach((subFolder) => concat(scanFolder(subFolder)));
  }

  return videos;
}

module.exports = function getVideos(folderData) {
  const videos = scanFolder(folderData);

  verbose('UTIL', `getVideos found ${videos.length} videos.`);

  return videos;
};
