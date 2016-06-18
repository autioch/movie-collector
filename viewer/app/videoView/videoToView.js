import formatFilesize from './formatFilesize';
import formatDuration from './formatDuration';

export default function videoToView(video) {
  return {
    actors: video.Actors,
    awards: video.Awards,
    director: video.Director,
    duration: formatDuration(video.duration),
    genre: video.Genre,
    height: video.height,
    imdbRating: video.imdbRating,
    imdbVotes: video.imdbVotes,
    language: video.language,
    metascore: video.Metascore,
    name: video.name,
    plot: video.Plot,
    size: formatFilesize(video.size),
    width: video.width,
    year: video.year
  };
}
