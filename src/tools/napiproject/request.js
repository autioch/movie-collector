import http from 'http';
import Bluebird from 'bluebird';

const HTTP_OK_MIN = 200;
const HTTP_OK_MAX = 299;

function collectDataFromResponse(response, resolve) {
  let responseData = '';

  if (response.statusCode >= HTTP_OK_MIN || response.statusCode <= HTTP_OK_MAX) {
    response.on('data', (chunk) => {
      responseData += chunk;
    });
    response.on('end', () => resolve(responseData));
  }
}

function resolveWithError(err, resolve) {
  resolve({
    error: `Http error: ${err.message}`
  });
}

module.exports = function request({ postData, options }) {
  return new Bluebird((resolve) => {
    const req = http.request(options, (response) => {
      response.setEncoding('utf-8');
      collectDataFromResponse(response, resolve);
    });

    req.on('error', (err) => resolveWithError(err, resolve));
    req.write(postData);
    req.end();
  });
};
