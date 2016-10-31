const http = require('http');
const getUrl = require('./getUrl');
const query = require('./query');
const bluebird = require('bluebird');
const parseOmdbData = require('./parseOmdbData');

/**
 * Places a request to omdb in a queue.
 * @method request
 * @param  {object} videoData   Object describing video.
 * @return {promise} Promise Promise that will resolve when request is complete.
 */
module.exports = function request(videoData) {
  return new bluebird(function(resolve) {
    query(function() {
      const url = getUrl(videoData);
      videoData.omdbUrl = url;
      http
        .get(url, function(res) {
          let omdbData = '';
          if (res.statusCode >= 200 || res.statusCode <= 299) {
            res.on('data', chunk => (omdbData += chunk));
            res.on('end', () => Object.assign(videoData, {
              omdb: parseOmdbData(omdbData)
            }));
          }
          return resolve();
        })
        .on('error', function(err) {
          videoData.omdb = {
            error: `Http error: ${err.message}`
          };
          return resolve();
        });
    });
  });
};
