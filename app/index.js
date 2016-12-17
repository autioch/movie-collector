const { verbose, prepareFolders, getVideos } = require('./utils');
const { getData, probe, omdb, save, check } = require('./tools');
const config = require('./config');

let folderData = {};
let videoDataArray = [];

verbose('APP', 'Movie collector starting.');

prepareFolders(config)
  .tap(() => verbose('APP', 'Folders prepared'))
  .then(() => {
    verbose('APP', 'Collecting data');
    getData(config)
      .tap(() => verbose('APP', 'Data collected'))
      .then((data) => {
        folderData = data;
        videoDataArray = getVideos(folderData);
      })
      .tap(() => verbose('APP', 'Executing tools'))
      .then(() => probe(config, videoDataArray))
      .then(() => omdb(config, videoDataArray))
      .then(() => save(config, folderData))
      .then(() => check(config, videoDataArray))
      // .then(() => stat(config, videoDataArray))
      .tap(() => verbose('APP', 'Done executing tools'))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
