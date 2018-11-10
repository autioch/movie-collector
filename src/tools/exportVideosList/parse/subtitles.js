import uniq from './uniq';

const label = {
  eng: 'English',
  ger: 'German',
  pol: 'Polish',
  und: 'Other',
  '?': 'Other'
};

module.exports = function parseSubtitles(video) {
  let subtitles = [];
  const { ffmpeg, subs } = video;

  if (ffmpeg && ffmpeg.subtitle) {
    subtitles = ffmpeg.subtitle.map((subtitle) => label[subtitle.language]);
  }

  if (subs) {
    subtitles.push('English or Polish');
  }

  if (subtitles.length) {
    return uniq(subtitles.sort());
  }

  return undefined;
};
