function normalizeName(name) {
  return name.replace(/[^0-9a-z ]/gi, '').toLowerCase();
}

module.exports = function checkName(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.omdb && videoData.omdb.title) {
      const omdb = normalizeName(videoData.omdb.title);
      const name = normalizeName(videoData.name);
      if (omdb !== name) {
        list.push({
          name: name,
          year: videoData.year,
          omdb: omdb,
          omdbYear: videoData.omdb.year
        });
      }
    }
  });
  return {
    label: 'Different name',
    list
  };
};
