module.exports = [{
  key: 'prepare',
  action: require('./prepare')
}, {
  key: 'input',
  action: require('./input')
}, {
  key: 'omdb',
  action: require('./omdb')
}, {
  key: 'ffmpeg',
  action: require('./ffmpeg')
}, {
  key: 'check',
  action: require('./check')
}, {
  key: 'stat',
  action: require('./stat')
}, {
  key: 'output',
  action: require('./output')
}];
