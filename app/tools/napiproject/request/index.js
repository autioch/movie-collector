const http = require('http');
const Bluebird = require('bluebird');
const getOptions = require('./getOptions');
const getPostData = require('./getPostData');
const getHash = require('./getHash');
const xml2json = require('./xml2json');
const { getQuery } = require('../../../utils');
const querystring = require('querystring');

const HTTP_OK_MIN = 200;
const HTTP_OK_MAX = 299;

/* Creates an instance of a query for omdb requests. */
const query = getQuery();

/**
 * Places a request to omdb in a queue.
 * @param  {Object} videoData   Object describing video.
 * @return {promise} Promise Promise that will resolve when request is complete.
 */
module.exports = function request(videoData) {
  /* Return promise. */
  return new Bluebird((resolve) => {
    /* Immediately enqueue function. */
    query(() => {
      /* When function gets executed, promise will be resolved. */
      videoData.subs = {};
      getHash(videoData).then((hash) => {
        const postData = querystring.stringify(getPostData(videoData, hash));
        const options = getOptions(postData);
        const req = http.request(options, (response) => {
          response.setEncoding('utf-8');
          let responseData = '';

          if (response.statusCode >= HTTP_OK_MIN || response.statusCode <= HTTP_OK_MAX) {
            response.on('data', (data) => {
              responseData += data;
            });
            response.on('end', () => xml2json(videoData, responseData).then(() => resolve(videoData)));
          }
        });

        req.on('error', (err) => {
          videoData.subs.error = `Http error: ${err.message}`;

          return resolve();
        });
        req.write(postData);
        req.end();
      });
    });
  });
};
