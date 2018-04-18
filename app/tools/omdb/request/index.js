const http = require('http');
const getUrl = require('./getUrl');
const Bluebird = require('bluebird');
const parse = require('./parse');
const { getQuery } = require('../../../utils');

const HTTP_OK_MIN = 200;
const HTTP_OK_MAX = 299;

/* Creates an instance of a query for omdb requests. */
const query = getQuery(1000);

/**
 * Places a request to omdb in a queue.
 * @param  {Object} videoData   Object describing video.
 * @return {promise} Promise Promise that will resolve when request is complete.
 */
module.exports = function request(videoData, omdbApiKey) {
  return new Bluebird((resolve) => {
    query(() => {
      videoData.omdbUrl = getUrl(videoData, omdbApiKey);
      http
        .get(videoData.omdbUrl, (res) => {
          let omdbData = '';

          if (res.statusCode >= HTTP_OK_MIN || res.statusCode <= HTTP_OK_MAX) {
            res.on('data', (chunk) => omdbData += chunk);
            res.on('end', () => {
              Object.assign(videoData, {
                omdb: parse(omdbData)
              });
              resolve(videoData);
            });
          }
        })
        .on('error', (err) => {
          videoData.omdb = {
            error: `Http error: ${err.message}`
          };

          return resolve();
        });
    });
  });
};
