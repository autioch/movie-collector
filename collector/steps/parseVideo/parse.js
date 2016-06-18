const config = reqAbs('config');
const videoFormats = config.formats.video;
const subtitleFormats = config.formats.subtitle;
const ignoreFormats = config.formats.ignore;

module.exports = function parse(item) {
  const videos = [];
  const subFolders = [];
  const other = item.items
    .filter(item => !(item.items && subFolders.push(parse(item))))
    .filter(item => !(videoFormats.indexOf(item.ext) > -1 && videos.push(item)))
    .filter(function(item) {
      if (subtitleFormats.indexOf(item.ext) > -1) {
        const matchingVideo = videos.find((movie) => movie.name === item.name);
        if (matchingVideo) {
          matchingVideo.subs = item.ext;
          return false;
        }
      }
      return true;
    })
    .filter(item => ignoreFormats.indexOf(item.ext) < 0);

  const data = {
    name: item.name
  };
  if (videos.length) {
    data.videos = videos;
  }
  if (subFolders.length) {
    data.subFolders = subFolders;
  }
  if (other.length) {
    data.other = other;
  }
  return data;
};
