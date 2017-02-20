const parseSubtitles = require('./parseSubtitles');

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
    genre: omdb.genre || undefined,
    director: omdb.director || undefined,
    writer: omdb.writer || undefined,
    actors: omdb.actors || undefined,
    plot: omdb.plot,
    rated: omdb.rated,
    duration: ffmpeg.duration ? Math.floor(ffmpeg.duration / seconds) : undefined,
    year: parseInt(video.year, 10),
    metascore: parseMetascore(omdb.metascore),
    imdbRating: parseImdbRating(omdb.imdbrating),
    imdbVotes: omdb.imdbvotes,
    created: file.created,
    formatLongName: ffmpeg.formatLongName,
    audioChannels: ffmpeg.audio && ffmpeg.audio.map((item) => item.channels).join(','),
    displayAspectRatio: ffmpeg.video && ffmpeg.video[0].displayAspectRatio,
    fps: ffmpeg.video && ffmpeg.video[0].fps.toString(),
    width: ffmpeg.video && ffmpeg.video[0].width,
    height: ffmpeg.video && ffmpeg.video[0].height,
    size: Math.floor(video.file.size / mb),
    errors: video.errors || [],
    subtitles: parseSubtitles(video)
  };
};
