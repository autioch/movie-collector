const Bluebird = require('bluebird');
const fs = Bluebird.promisifyAll(require('fs'));

/**
 * Saves data as a json, then returns the data.
 * @param  {String} sourceFileName      [description]
 * @param  {String} destinationFileName [description]
 * @return {mixed}              [description]
 */
module.exports = function copyFile(sourceFileName, destinationFileName) {
  return new Bluebird((resolve) => {
    fs.createReadStream(sourceFileName).pipe(fs.createWriteStream(destinationFileName));
    resolve();
  });
};
