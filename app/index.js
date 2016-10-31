const path = require('path');
const utils = require('./utils');
const config = require('./config');
const tools = require('./tools');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

/// Make this folder now, before we collect all data and it turns out we can't make that folder.
if (config.output) {
  utils.mkdirp(path.dirname(config.output));
}

let folderData = {};
let videoDataArray = [];

fs
  .statAsync(config.input)
  .then(function(stats) {
    if (stats.isFile()) {
      return tools.load(config.input);
    }
    if (stats.isDirectory()) {
      return tools.scan(config.input);
    }
    return bluebird.reject();
  })
  .then(function(data) {
    folderData = data;
    videoDataArray = utils.getVideos(folderData);
  })
  .then(() => tools.probe(config, videoDataArray))
  .then(() => tools.omdb(config, videoDataArray))
  .then(() => tools.save(config, folderData))
  .then(() => tools.stat(config, videoDataArray));
