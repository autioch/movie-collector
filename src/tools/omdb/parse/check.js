/**
 * Checks data fetched from omdb.
 * @param  {String} omdbData String response from omdb.
 * @return {Object}          Parsed omdb data.
 */
module.exports = function check(omdbData) {
  if (omdbData.error) {
    return omdbData;
  }
  let data;

  try {
    data = JSON.parse(omdbData);
  } catch (err) {
    return {
      error: `JSON parse error: ${err.message}`,
      omdbData
    };
  }

  if (data.Error) {
    return {
      error: `Data error: ${data.Error}`
    };
  }

  if (data.error) {
    return {
      error: `Data error: ${data.error}`
    };
  }

  return data;
};
