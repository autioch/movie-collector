module.exports = function parse(metadata) {
  const data = {
    duration: metadata.format.duration,
    bitrate: metadata.format.bit_rate,
    audio: []
  };

  metadata.streams.forEach(function(stream) {
    if (stream.codec_type === 'video') {
      const parts = stream.r_frame_rate.split('/');
      return Object.assign(data, {
        language: stream.tags && stream.tags.language ? stream.tags.language : '?',
        codec: stream.codec_name,
        fps: parts[1] ? Math.round(parts[0] / parts[1]) : '?',
        width: stream.width,
        height: stream.height
      });
    }
    if (stream.codec_type === 'audio') {
      data.audio.push({
        language: stream.tags && stream.tags.language ? stream.tags.language : '?',
        codec_name: stream.codec_name,
        channels: stream.channels
      });
    }
  });
  return data;
};
