/**
 * Checks video data for invalid ffmpeg data.
 * @param  {Object} videoData Data of a video to check.
 * @return {mixed}            Information about errors.
 */
module.exports = function checkffmpeg({ ffmpeg, size }) {
  if (!ffmpeg) {
    return false;
  }

  if (ffmpeg.error) {
    return {
      label: 'ffmpeg error',
      error: ffmpeg.error
    };
  }

  if (Object.keys(ffmpeg).length === 0) {
    return { label: 'No ffmpeg data' };
  }

  const errors = [];

  if (!ffmpeg.video) {
    errors.push({ label: 'No ffmpeg video stream data' });
  } else if (ffmpeg.video.length !== 1) {
    errors.push({
      label: 'Invalid video stream count',
      count: ffmpeg.video.length
    });
  }

  if (!ffmpeg.size) {
    errors.push({ label: 'No ffmpeg size data' });
  } else if (ffmpeg.size !== size) {
    errors.push({
      label: 'Different size data',
      file: size,
      ffmpeg: ffmpeg.size
    });
  }

  return errors;
};
