import extract from './extract';
import check from './check';

module.exports = function parseOmdbData(omdbData) {
  const data = check(omdbData);

  if (data.error) {
    return data;
  }

  return extract(data);
};
