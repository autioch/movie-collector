module.exports = {
  /* Parsing steps */
  dirToJSON: requireFrom('app/steps/dirToJSON'),
  fileToVideo: requireFrom('app/steps/fileToVideo'),
  ffProbe: requireFrom('app/steps/ffProbe'),
  queryOmdb: requireFrom('app/steps/queryOmdb'),
  getStats: requireFrom('app/steps/getStats'),
  outputList: requireFrom('app/steps/outputList'),
  outputStats: requireFrom('app/steps/outputStats'),
  /* Cache modules */
  cacheSave: requireFrom('app/cacheSave'),
  cacheLoad: requireFrom('app/cacheLoad'),
  /* Config */
  config: requireFrom('app/config')
};
