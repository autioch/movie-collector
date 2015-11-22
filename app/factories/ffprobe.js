'use strict';

let filesize = require('filesize');

function getLanguage(tags) {
  if (tags && tags.language) {
    return tags.language;
  }
  return '?';
}

function getFps(frame_rate) {
  let parts = frame_rate.split('/');
  return parts[1] ? Math.round(parts[0] / parts[1]) : '?';
}

const filesizeSettings = {
  base: 2,
  exponent: 2,
  round: 0,
  output: 'object'
};

module.exports = function (metadata) {

  let ffprobeObject = {
    duration: Math.round(metadata.format.duration / 60),
    bitrate: filesize(metadata.format.bit_rate, filesizeSettings).value,
    audio: [],
  };

  metadata.streams.forEach(function (stream) {
    if (stream.codec_type === 'video') {
      return Object.assign(ffprobeObject, {
        language: getLanguage(stream.tags),
        codec: stream.codec_name,
        fps: getFps(stream.r_frame_rate),
        width: stream.width,
        height: stream.height
      });
    }
    if (stream.codec_type === 'audio') {
      ffprobeObject.audio.push({
        language: getLanguage(stream.tags),
        codec_name: stream.codec_name,
        channels: stream.channels,
      });
    }
  });


  return ffprobeObject;
};
