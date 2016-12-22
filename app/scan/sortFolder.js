const { videoFormats, subtitleFormats, ignoredFormats } = require('../../config');

/**
 * Cleans up folderData:
 * - groups up subfolders,
 * - finds subtitles for videos based on name of the files in folder,
 * - groups up unidentified files and mismatched subtitles.
 * @param  {Object} folderData Result of resolved parseDir.getItemData.
 * @param  {String} parentFolderName Name of the parent folder.
 * @return {Object} Object Sorted data for the folder and its subfolders.
 */
module.exports = function sortFolder(folderData, parentFolderName = '') {
  const videos = [];
  const folders = [];

  /* Recursion. Get all subfolders and sort their data.  */
  const files = folderData.items.filter((item) => !(item.items && folders.push(sortFolder(item, folderData.name))));

  const other = files

    /* Move all videos from `other` to `videos` */
    .filter((item) => !(videoFormats.indexOf(item.ext) > -1 && videos.push(Object.assign(item, { parentFolder: folderData.name }))))

    /* Skip subtitles with matching video and set videos subs. */
    .filter((item) => {
      if (subtitleFormats.indexOf(item.ext) > -1) {
        const matchingVideo = videos.find((movie) => movie.name === item.name);

        if (matchingVideo) {
          matchingVideo.subs = item.ext;

          return false;
        }
      }

      return true;
    })

    /* Skip all ignored files */
    .filter((item) => ignoredFormats.indexOf(item.ext) < 0);

  folders.unshift({
    parentFolderName,
    name: folderData.name,
    videos,
    other
  });

  /* Return sorted contents of the folder*/
  return folders;
};
