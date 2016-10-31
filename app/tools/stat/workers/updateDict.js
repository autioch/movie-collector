module.exports = function updateDict(dict, item) {
  if (dict.hasOwnProperty(item)) {
    dict[item]++;
  } else {
    dict[item] = 1;
  }
};
