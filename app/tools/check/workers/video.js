module.exports = function checkVideo(videoDataArray) {
  const list = [];

  videoDataArray.forEach(function(videoData) {
    if (videoData.ffmpeg && videoData.ffmpeg.video && videoData.ffmpeg.video.length !== 1) {
      list.push({
        name: videoData.name,
        count: videoData.ffmpeg.video.length
      });
    }
  });
  return {
    label: 'Invalid video stream',
    list
  };
};
