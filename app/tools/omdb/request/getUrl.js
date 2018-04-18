const querystring = require('querystring');
const staticUrl = 'http://www.omdbapi.com/?';

/**
 * Constructs url to query database website for details.
 * @param  {Object} videoData Object describing video.
 * @return {String} url String to use for a request.
 */
module.exports = function getUrl(videoData, omdbApiKey) {
  const { title, year } = videoData;
  const params = {
	apikey: omdbApiKey,
    plot: 'short',
    r: 'json',
    type: 'movie',
    t: title.replace('  ', '+')
  };

  if (year) {
    params.y = year;
  }

  return staticUrl + querystring.stringify(params);
};
