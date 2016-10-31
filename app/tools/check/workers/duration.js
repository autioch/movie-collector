module.exports = function checkDuration(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.omdb && videoData.omdb.runtime && videoData.ffmpeg && videoData.ffmpeg.duration) {
      const omdb = parseInt(videoData.omdb.runtime, 10);
      const ffmpeg = Math.floor(videoData.ffmpeg.duration / 60);
      const diff = omdb - ffmpeg;
      if (diff > 10 || diff < -10) {
        list.push({
          name: videoData.name,
          omdb: omdb,
          ffmpeg: ffmpeg,
          omdbName: videoData.omdb.title
        });
      }
    }
  });
  return {
    label: 'Different duration',
    list
  };
};
