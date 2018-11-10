const extract = require('./extract');
const check = require('./check');

module.exports = function parseOmdbData(omdbData) {
  const data = check(omdbData);

  if (data.error) {
    return data;
  }

  return extract(data);
};
