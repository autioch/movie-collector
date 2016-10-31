module.exports = function checkffmpeg(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.ffmpeg && (videoData.ffmpeg.error || Object.keys(videoData.ffmpeg).length === 0)) {
      list.push({
        name: videoData.name,
        ffmpeg: videoData.ffmpeg.error || 'Missing'
      });
    }
  });
  return {
    label: 'Invalid ffmpeg data',
    list
  };
};
