/**
 * Reduces name to alphanumeric characters.
 * @param  {String} name Name to normalize
 * @return {String}      Normalized name.
 */
function normalizeName(name) {
  return name.replace(/[^0-9a-z ]/gi, '').toLowerCase();
}

module.exports = function checkOmdb(videoData) {
  const omdbData = videoData.omdb;

  if (!omdbData) {
    return false;
  }

  if (omdbData.error) {
    return {
      label: 'Omdb error',
      error: omdbData.error
    };
  }

  if (Object.keys(omdbData).length === 0) {
    return { label: 'No omdb data' };
  }

  const errors = [];

  if (!omdbData.year) {
    errors.push({ label: 'No omdb year' });
  } else if (omdbData.year !== videoData.year) {
    errors.push({
      label: 'Different year',
      file: videoData.year,
      omdb: omdbData.year
    });
  }

  if (!omdbData.title) {
    errors.push({ label: 'No omdb title' });
  } else if (normalizeName(omdbData.title) !== normalizeName(videoData.name)) {
    errors.push({
      label: 'Different video name',
      file: videoData.name,
      omdb: omdbData.title
    });
  }

  return errors;
};
