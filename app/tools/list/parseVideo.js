const seconds = 60;

const sizes = 1024;
const mb = sizes * sizes;

function parseMetascore(metascore) {
  return (metascore && metascore != 'N/A') ? parseInt(metascore, 10) : undefined;
}

function parseImdbRating(imdbrating) {
  return (imdbrating && imdbrating != 'N/A') ? parseInt(imdbrating, 10) : undefined;
}
module.exports = function parseVideo(video) {
  const { omdb = {}, ffmpeg = {}, file = {} } = video;

  return {
    title: video.title,
    genre: omdb.genre || [],
    plot: omdb.plot && omdb.plot != 'N/A' ? omdb.plot : undefined,
    rated: omdb.rated && omdb.rated != 'N/A' ? omdb.rated : undefined,
    duration: ffmpeg.duration ? Math.floor(ffmpeg.duration / seconds) : undefined,
    year: parseInt(video.year, 10),
    metascore: parseMetascore(omdb.metascore),
    imdbRating: parseImdbRating(omdb.imdbrating),
    imdbVotes: omdb.imdbvotes,
    created: file.created,
    formatLongName: ffmpeg.formatLongName,
    audioChannels: ffmpeg.audio.map((item) => item.channels).join(','),
    displayAspectRatio: ffmpeg.video[0].displayAspectRatio,
    fps: ffmpeg.video[0].fps.toString(),
    width: ffmpeg.video[0].width,
    height: ffmpeg.video[0].height,
    size: Math.floor(video.file.size / mb),
    errors: video.errors || []
  };
};
