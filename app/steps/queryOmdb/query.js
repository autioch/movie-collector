const http = require('http');
const throttle = require('lodash.throttle');
const getUrl = require('./getUrl');

let requests = [];

function makeRequest() {
  if (requests.length) {
    requests.pop()();
    throttledRequest();
  }
}

const throttledRequest = throttle(makeRequest, 500);

function queryOmdb(item, progressBar) {
  return new Promise(function(resolve, reject) {
    requests.push(function() {
      http.get(getUrl(item), function(res) {
        let data = '';
        if (res.statusCode >= 200 || res.statusCode <= 299) {
          res.on('data', (chunk) => (data += chunk));
          res.on('end', function() {
            try {
              Object.assign(item, JSON.parse(data));
            } catch (e) {}
          });
        }
        progressBar.tick();
        return resolve();
      });
    });
    throttledRequest();
  });
}

module.exports = queryOmdb;
