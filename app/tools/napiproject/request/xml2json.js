const xml2js = require('xml2js');
const saveSubtitles = require('./saveSubtitles');

module.exports = function xml2json(videoData, responseData) {
  return new Promise((resolve) => {
    xml2js.parseString(responseData, (err, result) => {
      if (err) {
        videoData.subs.error = `XML error: ${err.message}`;

        return resolve(videoData);
      }
      if (!result || !result.result) {
        videoData.subs.error = 'No response';

        return resolve(videoData);
      }
      if (!result.result.subtitles) {
        videoData.subs.error = 'No subtitles';

        return resolve(videoData);
      }

      if (result.result.subtitles.length === 1) {
        return saveSubtitles(videoData, result.result.subtitles[0]).then(() => resolve(videoData));
      }
      videoData.subs.error = `Too many subtitles (${result.result.subtitles.length})`;

      return resolve(videoData);
    });
  });
};
