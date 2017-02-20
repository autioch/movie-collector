module.exports = function parseSubtitles(video) {
  const subs = [];

  if (video.subs) {
    subs.push('EN / PL');
  }

  if (!video.ffmpeg || !video.ffmpeg.subtitle) {
    return subs;
  }

  return subs.concat(video.ffmpeg.subtitle.map((subtitle) => subtitle.language));
};
