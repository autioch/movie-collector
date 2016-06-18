module.exports = function parseFilename(fileName) {
  const data = {
    ext: fileName.substr(-3)
  };
  if (fileName.startsWith('[')) {
    data.year = fileName.substr(1, 4);
    data.name = fileName.substring(7, fileName.length - 4);
  } else {
    data.name = fileName.substring(0, fileName.length - 4);
  }
  return data;
};
