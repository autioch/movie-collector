module.exports = function checkYear(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.omdb && videoData.omdb.year && videoData.omdb.year !== videoData.year) {
      list.push({
        name: videoData.name,
        file: videoData.year,
        omdb: videoData.omdb.year,
        omdbName: videoData.omdb.title
      });
    }
  });
  return {
    label: 'Different year',
    list
  };
};
