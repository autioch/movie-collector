module.exports = function(fileName) {
  let data = null;
  try {
    data = reqAbs(`./dist/data/${fileName}.json`);
  } catch (e) {
    console.warn(`Failed to load cache ${fileName}`);
  }
  return data;
};
