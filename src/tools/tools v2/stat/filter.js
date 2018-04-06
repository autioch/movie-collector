const ignoredKeys = [
  'ffmpeg.audio[].profile',
  'ffmpeg.subtitle[].codecname',
  'ffmpeg.subtitle[].disposition[]',
  'ffmpeg.unkown[].codec_name',
  'ffmpeg.unkown[].index',
  'ffmpeg.unkown[].tags.filename',
  'ffmpeg.unkown[].tags.mimetype',
  'ffmpeg.video[].displayaspectratio',
  'ffmpeg.video[].isavc',
  'ffmpeg.video[].level',
  'ffmpeg.video[].pixfmt',
  'ffmpeg.video[].profile',
  'file.folder',
  'omdb.awards',
  'omdb.year',
  'omdb.error',
  'subs.ext'
];

function isIgnoredKey(statistic) {
  const lowerCaseKey = statistic.key.toLowerCase();

  return ignoredKeys.indexOf(lowerCaseKey) > -1;
}

const forbiddenWords = ['longname', 'long_name', 'generated', 'duration', 'released'];

function includesForbiddenWord(statistic) {
  const lowerCaseKey = statistic.key.toLowerCase();

  return forbiddenWords.some((forbiddenKey) => lowerCaseKey.includes(forbiddenKey));
}

function isInvariant(statistic) {
  const { count, variety } = statistic;

  if (variety === 1) {
    return true;
  }

  if (count === variety) {
    return true;
  }

  if (count < variety * 1.1) {
    return true;
  }

  return false;
}

module.exports = function filter(statistic) {
  if (isInvariant(statistic)) {
    return false;
  }

  if (includesForbiddenWord(statistic)) {
    return false;
  }

  if (isIgnoredKey(statistic)) {
    return false;
  }

  return true;
};
