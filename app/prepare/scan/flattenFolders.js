/**
 * Flattens folderData into an array of videos in folders and subfolders.
 * @param  {Object} folderData Object returned by scan tool.
 *   @param  {Array} videos     Array of videos in the folder
 *   @param  {Array} subFolders Array of subfolders in the folder.
 * @return {Array}             Array of videos found in folders.
 */
function scanFolder({ videos = [], subFolders = [], name }) {
  videos.forEach((video) => {
    video.parentFolder = name;
  });

  return subFolders.reduce((result, subFolder) => result.concat(scanFolder(subFolder)), videos);
}

module.exports = function flattenFolders(folderData) {
  const videos = scanFolder(folderData);

  console.log(`Found ${videos.length} videos.`);

  return videos;
};
