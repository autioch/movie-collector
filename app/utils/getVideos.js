function getVideos(folderData) {

  let videos = [];

  function concat(toAdd) {
    videos = videos.concat(toAdd);
  }

  if (folderData.videos) {
    concat(folderData.videos);
  }
  if (folderData.subFolders) {
    folderData.subFolders.forEach(subFolder => concat(getVideos(subFolder)));
  }
  return videos;
}

module.exports = getVideos;
