module.exports = function check(omdbData) {
  let data;

  try {
    data = JSON.parse(omdbData);
  } catch (err) {
    return { error: `JSON parse error: ${err.message}` };
  }

  if (data.Error) {
    return { error: `Data error: ${data.Error}` };
  }

  if (data.error) {
    return { error: `Data error: ${data.error}` };
  }

  return data;
};
