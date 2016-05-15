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

export default function folderToView(folder) {
  const data = {
    name: folder.name
  };
  if (folder.videos) {
    data.count = folder.videos.length;
    const genres = [];
    folder.videos
      .filter(video => !!video.Genre)
      .forEach(video => Array.prototype.push.apply(genres, video.Genre.split(', ')));
    if (genres.length) {
      data.genres = uniq(genres).sort();
    }
    const ratedVideos = folder.videos.filter(video => !!video.imdbRating);
    const ratingSum = ratedVideos.reduce((sum, video) => sum + parseFloat(video.imdbRating, 10), 0);
    if (ratingSum > 0) {
      data.rating = Math.round(ratingSum * 100 / ratedVideos.length) / 100;
    }
  }
  return data;
}
