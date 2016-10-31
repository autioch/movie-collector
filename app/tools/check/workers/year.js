module.exports = function checkYear(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (!videoData.year) {
      list.push({
        name: videoData.name
      });
    }
  });
  return {
    label: 'No year in file name',
    list
  };
};
