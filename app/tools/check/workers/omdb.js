module.exports = function checkOmdb(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.omdb) {
      if (videoData.omdb.error || !Object.keys(videoData.omdb).length) {
        list.push({
          name: videoData.name,
          omdbUrl: videoData.omdbUrl,
          omdb: videoData.omdb.error || 'Missing'
        });
      }
    }
  });
  return {
    label: 'Invalid omdb data',
    list
  };
};
