const xml2js = require('xml2js');
const saveSubtitles = require('./saveSubtitles');

module.exports = function parse(videoData, responseData) {
  return new Promise((resolve) => {
    if (responseData.error) {
      resolve(responseData);
    }
    xml2js.parseString(responseData, (err, result) => {
      if (err) {
        return resolve({
          error: `XML error: ${err.message}`
        });
      }

      if (!result || !result.result) {
        return resolve({
          error: 'No response'
        });
      }

      if (!result.result.subtitles) {
        return resolve({
          error: 'No subtitles'
        });
      }

      const [subtitle, ...moreSubtitles] = result.result.subtitles;

      if (moreSubtitles.length > 0) {
        return saveSubtitles(videoData, subtitle);
      }

      return resolve({
        error: `Too many subtitles (${result.result.subtitles.length})`
      });
    });
  });
};
