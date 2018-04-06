import Bluebird from 'bluebird';
import rawFs from 'fs';

const fs = Bluebird.promisifyAll(rawFs);

/**
 * Saves data as a json, then returns the data.
 * @param  {String} sourceFileName      [description]
 * @param  {String} destinationFileName [description]
 * @return {mixed}              [description]
 */
export default function copyFile(sourceFileName, destinationFileName) {
  return new Bluebird((resolve) => {
    fs.createReadStream(sourceFileName).pipe(fs.createWriteStream(destinationFileName));
    resolve();
  });
}
