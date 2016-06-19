import Backbone from 'backbone';
import VideoCollection from './videoCollection';

function uniq(arrayToFilter) {
  const uniqArray = [];
  const dict = {};
  for (let i = 0; i < arrayToFilter.length; i++) {
    const value = arrayToFilter[i];
    if (!dict.hasOwnProperty(value)) {
      uniqArray.push(value);
      dict[value] = true;
    }
  }
  return uniqArray;
}

const FolderModel = Backbone.Model.extend({
  defaults() {
    return {
      name: '',
      videos: null,
      subFolders: null,
      isExpanded: false
    };
  },
  initialize(attributes) {
    this.set({
      videos: new VideoCollection(attributes.videos),
      subFolders: new FolderCollection(attributes.subFolders)
    });
  },
  toggleExpanded() {
    this.set('isExpanded', !this.get('isExpanded'));
  },
  toView() {
    const folder = this.toJSON();
    const data = {
      name: folder.name
    };
    if (folder.videos) {
      data.count = folder.videos.length;
      data.genres = [];
      folder.videos
        .filter(video => !!video.Genre)
        .forEach(video => Array.prototype.push.apply(data.genres, video.Genre.split(', ')));
      if (data.genres.length) {
        data.genres = uniq(data.genres).sort();
      }
      const ratedVideos = folder.videos.filter(video => !!video.imdbRating);
      const ratingSum = ratedVideos.reduce((sum, video) => sum + parseFloat(video.imdbRating, 10), 0);
      if (ratingSum > 0) {
        data.rating = Math.round(ratingSum * 100 / ratedVideos.length) / 100;
      } else {
        data.rating = false;
      }
    }
    return data;
  }
});

const FolderCollection = Backbone.Collection.extend({
  model: FolderModel
});

export default FolderCollection;
