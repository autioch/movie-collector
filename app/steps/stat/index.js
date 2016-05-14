const bluebird = require('bluebird');
const getData = require('./getData');
const workers = require('./workers');

module.exports = function(dir) {
  const data = getData(dir);
  const stats = Object
    .keys(data)
    .map(key => data[key])
    .filter(stat => !!workers[stat.type])
    .map(stat => workers[stat.type](stat));
  return bluebird.resolve(stats);
};
