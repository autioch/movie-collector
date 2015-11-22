'use strict';

let config = require('../config');
let videoFileFactory = require('./videoFile');
let videoFormats = config.formats.video;
let subtitleFormats = config.formats.subtitle;
let ignoreFormats = config.formats.ignore;


module.exports = function (folder) {

  let videos = [];

  let other = folder
    .files
    .filter(function (file) {
      if (videoFormats.indexOf(file.ext) > -1) {
        videos.push(videoFileFactory(file));
        return false;
      }
      return true;
    })
    .filter(function (file) {
      if (subtitleFormats.indexOf(file.ext) > -1) {
        let matchingVideo = videos.find((movie) => movie.name === file.name);
        if (matchingVideo) {
          matchingVideo.subs = file.ext;
          return false;
        }
      }
      return (ignoreFormats.indexOf(file.ext) < 0);
    });

  return {
    name: folder.name,
    videos: videos,
    other: other
  };
};
