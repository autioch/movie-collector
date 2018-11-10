import subtitles from './subtitles';
import ratingsMap from './ratingsMap';
const seconds = 60;
const sizes = 1024;
const mb = sizes * sizes;
const ROUND_AMOUNT = 1000;
const LEVEL_SIZE = 20;

function validateNumber(value) {
  return isNaN(value) ? undefined : value;
}

function getLevel(value) {
  return Math.ceil(value / LEVEL_SIZE);
}

function delveFirst(ffmpeg, prop) {
  return (ffmpeg.video && ffmpeg.video.length && ffmpeg.video[0][prop]) || undefined;
}

function delveArray(arr, callbackFn) {
  if (arr && arr.length) {
    if (callbackFn) {
      return arr.map(callbackFn).sort();
    }

    return arr.sort();
  }

  return undefined;
}

module.exports = function parseVideo(video) {
  const { omdb = {}, ffmpeg = {}, file = {} } = video;

  const item = {
    title: video.title,
    genre: delveArray(omdb.genre),
    actors: delveArray(omdb.actors),
    director: delveArray(omdb.director),
    writer: delveArray(omdb.writer, (arrayItem) => arrayItem.replace(/\([^)]+\)/, '').trim()),
    errors: video.errors && video.errors.length ? video.errors.map((error) => error.label) : undefined,
    duration: ffmpeg.duration ? Math.floor(ffmpeg.duration / seconds) : undefined,
    added: file.created ? file.created.substr(0, 10) : undefined,
    plot: omdb.plot,
    year: parseInt(video.year, 10),
    metascore: validateNumber(parseInt(omdb.metascore, 10)),
    imdbRating: validateNumber(parseInt(omdb.imdbrating, 10)),
    imdbVotes: omdb.imdbvotes,
    formatLongName: ffmpeg.formatLongName,
    audioChannels: ffmpeg.audio && ffmpeg.audio.map((channel) => channel.channels).join(','),
    displayAspectRatio: delveFirst(ffmpeg, 'displayAspectRatio'),
    fps: delveFirst(ffmpeg, 'fps'),
    width: delveFirst(ffmpeg, 'width'),
    height: delveFirst(ffmpeg, 'height'),
    size: Math.floor(video.file.size / mb),
    subtitles: subtitles(video)
  };

  if (omdb.rated) {
    item.rated = omdb.rated;
    item.ratedLevel = ratingsMap[omdb.rated] || 0;
  }
  if (item.metascore) {
    item.metascoreLevel = getLevel(item.metascore);
  }
  if (item.imdbRating) {
    item.imdbRatingLevel = getLevel(item.imdbRating);
    item.imdbRatingRounded = item.imdbRating / 10;
  }
  if (item.imdbVotes) {
    item.imdbVotesRounded = item.imdbVotes > ROUND_AMOUNT ? `${Math.ceil(item.imdbVotes / ROUND_AMOUNT)}K` : item.imdbVotes;
  }

  return item;
};
