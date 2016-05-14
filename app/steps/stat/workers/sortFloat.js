module.exports = function sortFloat(a, b) {
  const floatA = parseFloat(a);
  const floatB = parseFloat(b);
  return floatA > floatB ? 1 : (floatB > floatA ? -1 : 0);
};
