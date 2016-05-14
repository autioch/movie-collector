module.exports = function(fileName) {
  const file = `../../cache/${fileName}.json`;
  let data;
  try {
    data = require(file);
  } catch (e) {
    console.warn(`Failed to load cache ${fileName}`);
  }
  return data;
};
