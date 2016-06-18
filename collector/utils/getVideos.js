function getVideos(dir) {

  let videos = [];

  function concat(toAdd) {
    videos = videos.concat(toAdd);
  }

  if (dir.videos) {
    concat(dir.videos);
  }
  if (dir.subFolders) {
    dir.subFolders.forEach(subFolder => concat(getVideos(subFolder)));
  }
  return videos;
}

module.exports = getVideos;
