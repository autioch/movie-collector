const { videoFormats, subtitleFormats, ignoredFormats } = require('../../config');

/**
 * Sorts and filters files found inside a folder.
 * @param  {Array} folderFiles Array of folder files.
 * @return {Object}            Object containing videos and other files.
 */
module.exports = function sortFiles(folderFiles) {
  const videos = [];

  const other = folderFiles

    /* Move all videos from `other` to `videos` */
    .filter((item) => !(videoFormats.indexOf(item.file.ext) > -1 && videos.push(item)))

    /* Skip subtitles with matching video and set videos subs. */
    .filter((item) => {
      if (subtitleFormats.indexOf(item.file.ext) > -1) {
        const matchingVideo = videos.find((movie) => movie.title === item.title);

        /* Create separate subs objects for future features. */
        if (matchingVideo) {
          matchingVideo.subs = {
            ext: item.file.ext
          };

          return false;
        }
      }

      return true;
    })

    /* Skip all ignored files */
    .filter((item) => ignoredFormats.indexOf(item.file.ext) < 0);

  return {
    videos,
    other
  };
};
