import Backbone from 'backbone';
import formatDuration from './formatDuration';
import formatFilesize from './formatFilesize';

export default Backbone.Model.extend({
  toView() {
    const video = this.toJSON();
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
});
