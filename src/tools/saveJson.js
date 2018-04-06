import Bluebird from 'bluebird';
import rawFs from 'fs';

const fs = Bluebird.promisifyAll(rawFs);

const serialize = (contents) => JSON.stringify(contents, null, '  ');
const serializeMinify = (contents) => JSON.stringify(contents);

/**
 * Saves data as a json, then returns the data.
 * @param  {String} fileName     [description]
 * @param  {mixed} fileContents [description]
 * @param  {Boolean} minify [description]
 * @return {mixed}              [description]
 */
export default function saveJson(fileName, fileContents, minify = false) {
  return fs
    .writeFileAsync(fileName, minify ? serializeMinify(fileContents) : serialize(fileContents), 'utf8')
    .then(() => fileContents);
}
