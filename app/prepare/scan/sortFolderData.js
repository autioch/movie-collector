const { videoFormats, subtitleFormats, ignoredFormats } = require('../../config');

/**
 * Cleans up folderData:
 * - groups up subfolders,
 * - finds subtitles for videos based on name of the files in folder,
 * - groups up unidentified files and mismatched subtitles.
 * @param  {Object} folderData Result of resolved parseDir.getItemData.
 * @return {Object} Object Sorted data for the folder and its subfolders.
 */
module.exports = function sortFolderData(folderData) {
  const videos = [];
  const subFolders = [];

  const other = folderData.items

    /* Recursion. Move all subfolders from `other to `subfolders` and sort their data.  */
    .filter((item) => !(item.items && subFolders.push(sortFolderData(item))))

    /* Move all videos from `other` to `videos` */
    .filter((item) => !(videoFormats.indexOf(item.ext) > -1 && videos.push(item)))

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

  /* Return sorted contents of the folder*/
  return {
    name: folderData.name,
    videos,
    subFolders,
    other
  };
};
