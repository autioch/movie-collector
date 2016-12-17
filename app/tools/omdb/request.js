const http = require('http');
const getUrl = require('./getUrl');
const query = require('./query');
const Bluebird = require('bluebird');
const parseOmdbData = require('./parseOmdbData');
const { verbose } = require('../../utils');

/**
 * Places a request to omdb in a queue.
 * @param  {Object} videoData   Object describing video.
 * @return {promise} Promise Promise that will resolve when request is complete.
 */
module.exports = function request(videoData) {
  return new Bluebird((resolve) => {
    query(() => {
      const url = getUrl(videoData);

      videoData.omdbUrl = url;
      verbose('TOOL OMDB', `Request ${videoData.name}`);
      http
        .get(url, (res) => {
          verbose('TOOL OMDB', `Response ${videoData.name}`);
          let omdbData = '';

          if (res.statusCode >= 200 || res.statusCode <= 299) {
            res.on('data', (chunk) => (omdbData += chunk));
            res.on('end', () => Object.assign(videoData, { omdb: parseOmdbData(omdbData) }));
          }

          return resolve();
        })
        .on('error', (err) => {
          verbose('TOOL OMDB', `Error ${videoData.name}`);
          videoData.omdb = { error: `Http error: ${err.message}` };

          return resolve();
        });
    });
  });
};
