import { promise as fs } from 'fs';

const bluebird = require('bluebird');
const path = require('path');

const filesToCopy = [
  'filmweb.png',
  'google.png',
  'imdb.png',
  'metacritic.png',
  'rotten.png',
  'schema.json'
];

function source(fileName) {
  return path.resolve(path.join(__dirname, 'schema', fileName));
}

function destination(fileName, config) {
  return path.resolve(path.join(config.outputPath, 'list', 'data', fileName));
}

module.exports = function copySchema(config) {
  return bluebird.map(filesToCopy, (fileToCopy) => fs.copyFile(source(fileToCopy), destination(fileToCopy, config)));
};
