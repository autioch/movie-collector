const querystring = require('querystring');
const staticUrl = 'http://www.omdbapi.com/?';

/**
 * Constructs url to query database website for details.
 * @method getUrl
 * @param  {object} videoData Object describing video.
 * @return {string} url String to use for a request.
 */
module.exports = function getUrl(videoData) {
  const params = {
    plot: 'short',
    r: 'json',
    type: 'movie',
    t: videoData.name.replace('  ', '+'),
  };
  if (videoData.year) {
    params.y = videoData.year;
  }
  return staticUrl + querystring.stringify(params);
};
