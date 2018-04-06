import CATEGORIES from './categories';
import TYPES from './types';

export default {
  settingValues: {
    inputDirectory: '.',
    showOnlyProblems: false,
    useFfmpeg: false,
    forceFfmpeg: false,
    useOmdb: false,
    forceOmdb: false,
    suggestRenames: false,
    videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],
    subtitleFormats: ['srt', 'txt', 'sub', 'idx'],
    ignoredFormats: ['jpg', 'bmp', 'png'],
    outputPath: './output',
    cleanupFolder: false,
    minifyOutput: false,
    reportUnknownFiles: false,
    reportErrors: false,
    outputStatistics: false,
    outputList: false,
    outputRawData: false
  },
  settings: [{
    id: 'inputDirectory',
    isFavorite: true,
    label: 'Scan file with ffmpeg for info',
    type: TYPES.DIRECTORY,
    category: CATEGORIES.INPUT.id
  }, {
    id: 'showOnlyProblems',
    isFavorite: true,
    label: 'Show only problems',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.INPUT.id
  }, {
    id: 'useFfmpeg',
    label: 'Scan file with ffmpeg for info',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.DATA_COLLECTION.id
  }, {
    id: 'forceFfmpeg',
    label: 'Force ffmpeg for all files',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.DATA_COLLECTION.id
  }, {
    id: 'useOmdb',
    label: 'Query omdb for info',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.DATA_COLLECTION.id
  }, {
    id: 'forceOmdb',
    label: 'Force omdb for all files',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.DATA_COLLECTION.id
  }, {
    id: 'suggestRenames',
    label: 'Suggest renames',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.DATA_COLLECTION.id
  }, {
    id: 'videoFormats',
    label: 'Video formats',
    type: TYPES.LIST,
    category: CATEGORIES.FILE_TYPES.id
  }, {
    id: 'subtitleFormats',
    label: 'Subtitle formats',
    type: TYPES.LIST,
    category: CATEGORIES.FILE_TYPES.id
  }, {
    id: 'ignoredFormats',
    label: 'Ignored formats',
    type: TYPES.LIST,
    category: CATEGORIES.FILE_TYPES.id
  }, {
    id: 'outputPath',
    label: 'Output directory',
    type: TYPES.DIRECTORY,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'cleanupFolder',
    label: 'Cleanup folder',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'minifyOutput',
    label: 'Minify all outputted files',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'reportUnknownFiles',
    label: 'Report all unknown files',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'reportErrors',
    label: 'Report all errors',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'outputStatistics',
    label: 'Output statistics',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'outputList',
    label: 'Output list',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }, {
    id: 'outputRawData',
    label: 'Output raw data',
    type: TYPES.BOOLEAN,
    category: CATEGORIES.OUTPUT.id
  }]
};
