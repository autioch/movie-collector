import http from 'http';
import Bluebird from 'bluebird';

const HTTP_OK_MIN = 200;
const HTTP_OK_MAX = 299;

function collectDataFromResponse(response, resolve) {
  response.setEncoding('utf-8');
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

export default function request(videoUrl) {
  return new Bluebird((resolve) => {
    http
      .get(videoUrl, (res) => collectDataFromResponse(res, resolve))
      .on('error', (err) => resolveWithError(err, resolve));
  });
}
