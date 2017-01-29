module.exports = {

  /* Optional.
   * If set to true, all specified folders are created before all other operations.
   * If set to false, no folders are created.
   */
  prepare: true,

  /* Requires one or both of options below.
   * If inputPath is specified, path will be scanned for videos.
   * If inputCache is specified, file contents will be read and treated as videos scanned before.
   * If both are specified, data will be merged. Merge rule is specified by inputTrim. */
  inputPath: false,
  inputCache: false,

  /* Optimal.
   * If set to true, data for videos that were not found in inputPath will not be included in output. */
  inputTrim: false,

  /* Optional.
   * If set to true, json content will be minified. */
  minify: false,

  /* Optional.
   * If set, should point to folder containing bin folder with ffmpeg executables.
   * ffmpeg will be used to probe the videos without ffmpeg data. */
  ffmpeg: false,

  /* Optional.
   * If set to true, all movies, even with valid ffmpeg data will be probed.
   * If set to false, only movies without ffmpeg data or with error will be probed.*/
  ffmpegForce: false,

  /* Optional.
   * If set to true, https://www.omdbapi.com/ will be queried for additional data.
   * Movies that already have valid omdb data will not be checked again. */
  omdb: false,

  /* Optional.
   * If set to true, all movies, even with valid omdb data will be queried.
   * If set to false, only movies without omdb data or with error will be queried.*/
  omdbForce: false,

  /* Optional.
   * If set to true, gathered data will be checked for problems. */
  validate: false,

  /* Required.
   * In addition to returning from app, all file output will be placed in that path. */
  outputPath: false,

  /* Optional.
   * If set to true, json of videos will be generated. */
  outputData: false,

  /* Optional.
   * If set to true, json of unknown files will be generated. */
  outputUnknown: false,

  /* Optional.
   * If set to true, html list will be generated. */
  outputList: false,

  /* Optional.
   * If set to true, statistics and html page will be generated. */
  outputStat: false,

  /* Required.
   * Files that should be recognized as videos. */
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],

  /* Required.
   * Files that should be recognized as subtitles. */
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],

  /* Required.
   * Files that should be ignored. */
  ignoredFormats: ['jpg', 'bmp']
};
