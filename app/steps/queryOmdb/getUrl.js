module.exports = function getUrl(item) {
  return `http://www.omdbapi.com/?t=${item.name.replace(' ', '+')}&y=${item.year}&plot=short&r=json`;
};
