/**
 * Reduces name to alphanumeric characters.
 * @param  {String} name Name to normalize
 * @return {String}      Normalized name.
 */
function normalizeName(name) {
  return name.replace(/[^0-9a-z ]/gi, '').toLowerCase();
}

module.exports = function checkOmdb(videoData) {
  const { omdb, year, name } = videoData;

  if (!omdb) {
    return false;
  }

  if (omdb.error) {
    return {
      label: 'Omdb error',
      error: omdb.error
    };
  }

  if (Object.keys(omdb).length === 0) {
    return { label: 'No omdb data' };
  }

  const errors = [];

  if (!omdb.year) {
    errors.push({ label: 'No omdb year' });
  } else if (omdb.year !== year) {
    errors.push({
      label: 'Different year',
      file: year,
      omdb: omdb.year
    });
  }

  if (!omdb.title) {
    errors.push({ label: 'No omdb title' });
  } else if (normalizeName(omdb.title) !== normalizeName(name)) {
    errors.push({
      label: 'Different video name',
      file: name,
      omdb: omdb.title
    });
  }

  return errors;
};
