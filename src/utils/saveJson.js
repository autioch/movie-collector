import { promise as fs } from 'fs';

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
  const serializedContents = minify ? serializeMinify(fileContents) : serialize(fileContents);

  return fs
    .writeFile(fileName, serializedContents, 'utf8')
    .then(() => fileContents);
}
