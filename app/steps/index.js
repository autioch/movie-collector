const config = reqAbs('config');

module.exports = [{
  key: 'parseDir',
  method: require('./parseDir'),
  startingValue: config.rootPath
}, {
  key: 'parseVideo',
  method: require('./parseVideo')
}, {
  key: 'ffProbe',
  method: require('./ffProbe')
}, {
  key: 'queryOmdb',
  method: require('./queryOmdb')
}, {
  key: 'stat',
  method: require('./stat')
}];
