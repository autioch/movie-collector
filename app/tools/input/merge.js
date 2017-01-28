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

module.exports = function merge(config, cacheVideos, scanVideos) {
  scanVideos.foreach((pathVideo) => {
    const foundVideo = cacheVideos.find((cacheVideo) => cacheVideo.title === pathVideo.title && cacheVideo.year === pathVideo.year);

    if (foundVideo) {
      Object.assign(pathVideo, foundVideo);
      foundVideo.__foundInScan = true;
    }
  });

  if (config.inputTrim) {
    if (!config.inputPath) {
      return cacheVideos;
    }

    return scanVideos.sort(compareFunction);
  }

  return cacheVideos
    .filter((video) => !video.__foundInScan)
    .concat(scanVideos)
    .sort(compareFunction);
};
