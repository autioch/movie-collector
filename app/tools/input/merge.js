/**
 * Defines order of 2 videos.
 * @param  {Object} videoA Video data.
 * @param  {Object} videoB Video data.
 * @return {Number}        Order of the file.
 */
function compareFunction(videoA, videoB) {
  if (videoA.title < videoB.title) {
    return -1;
  }
  if (videoA.title > videoB.title) {
    return 1;
  }
  if (videoA.year < videoB.year) {
    return -1;
  }
  if (videoA.year > videoB.year) {
    return 1;
  }

  return 0;
}

/**
 * Merges video cache with scan data. Sorts out duplicates and old videos.
 * @param  {Object} config   Application config.
 * @param  {Array} cacheVideos Array of cached videos from the json.
 * @param  {Array} scanVideos  Array of videos found during folder scan.
 * @return {Array}             Array of videos.
 */
module.exports = function merge(config, cacheVideos, scanVideos) {
  // console.log(`Cache: ${cacheVideos.length} video(s)`);
  // console.log(`Scan:  ${scanVideos.length} video(s)`);
  scanVideos.forEach((pathVideo) => {
    const foundVideo = cacheVideos.find((cacheVideo) => cacheVideo.title === pathVideo.title && cacheVideo.year === pathVideo.year);

    if (foundVideo) {
      Object.assign(pathVideo, foundVideo);
      foundVideo.__foundInScan = true;
    }
  });

  const oldVideos = cacheVideos.filter((video) => !video.__foundInScan);

  // console.log(`Old:   ${oldVideos.length} video(s)`);

  if (config.inputTrim) {
    if (config.inputPath) {
      return scanVideos.sort(compareFunction);
    }

    return cacheVideos.sort(compareFunction);
  }

  return scanVideos.concat(oldVideos).sort(compareFunction);
};
