const videoFileTypes = ['avi', 'mp4', 'mkv', 'm4v', 'mpg', 'mpeg', 'flv', 'webm'];
const subtitleFileTypes = ['srt', 'txt', 'sub', 'idx'];
const ignoredFileTypes = ['jpg', 'bmp', 'png'];
const spamFileTypes = ['nfo', 'sfv', 'ini', 'db'];

const FILE_TYPES = {};

function assignTypesToFileTypes(fileTypesArray, type) {
  fileTypesArray.forEach((fileType) => {
    FILE_TYPES[fileType] = type;
  });
}
const CATEGORIES = {
  VIDEO: 'video',
  SUBTITLE: 'subtitle',
  IGNORED: 'ignored',
  SPAM: 'spam',
  UNKNOWN: 'unknown',
  FOLDER: 'folder'
};

assignTypesToFileTypes(videoFileTypes, CATEGORIES.VIDEO);
assignTypesToFileTypes(subtitleFileTypes, CATEGORIES.SUBTITLE);
assignTypesToFileTypes(ignoredFileTypes, CATEGORIES.IGNORED);
assignTypesToFileTypes(spamFileTypes, CATEGORIES.SPAM);

export { FILE_TYPES, CATEGORIES };
