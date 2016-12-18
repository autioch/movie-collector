module.exports = {

  /* Required.
   * If value resolves to a folder, it will be scanned and an array of videoData will be produced.
   * If value resolves to a json, it will be read and treated like a array of videoData. */
  input: '',

  /* Optional.
   * Collected data will be saved in the file .
   * Value of output must be name of the file to save data.  */
  output: '',

  /* Optional.
   * If set, should point to folder containing bin folder with ffmpeg executables.
   * ffmpeg will be used to probe the videos without ffmpeg data. */
  ffmpeg: false,

  /* Optional.
   * If set to true, all movies, even with valid ffmpeg data will be probed. */
  ffmpegForce: false,

  /* Optional.
   * If set to true, https://www.omdbapi.com/ will be queried for additional data.
   * Movies that already have valid omdb data will not be checked again. */
  omdb: false,

  /* Optional.
   * If set to true, all movies, even with valid omdb data will be checked. */
  omdbForce: false,

  /* Optional.
   * If set, gathered data will be used for statistics.
   * Value of stat must be name of the folder to save data.  */
  stat: false,

  /* Optional.
   * If set to true, gathered data will be checked for problems. */
  check: false,

  /* Required.
   * Files that should be recognized as videos */
  videoFormats: ['avi', 'mp4', 'mkv', 'm4v'],

  /* Required.
   * Files that should be recognized as subtitles */
  subtitleFormats: ['srt', 'txt', 'sub', 'idx'],

  /* Required.
   * Files that should be ignored */
  ignoredFormats: ['jpg', 'bmp']
};
