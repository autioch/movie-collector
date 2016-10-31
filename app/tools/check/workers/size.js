module.exports = function checkSize(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.ffmpeg && videoData.ffmpeg.size && (videoData.ffmpeg.size !== videoData.size)) {
      list.push({
        name: videoData.name,
        file: videoData.size,
        ffmpeg: videoData.ffmpeg.size
      });
    }
  });
  return {
    label: 'Different size',
    list
  };
};
