/* In case data needs to be manipulated, this is the place. */
module.exports = function update(videos) {
  const writerRegex = /\([^)]+\)/g;

  videos.forEach((video) => {
    if (video.omdb && video.omdb.writer) {
      video.omdb.writer = video.omdb.writer.map((writer) => writer.replace(writerRegex, '').trim());
    }
  });

  // return [videos[0]];
  return videos;
};
