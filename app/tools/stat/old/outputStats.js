'use strict';

let fs = require('fs');
let _ = require('lodash');
let dbLoad = requireFrom('app/dbLoad');
const template = _.template(fs.readFileSync('./app/templates/stats.html').toString());
const filesToCopy = [
  'stats.js',
  'stats.css'
];

module.exports = function (folders, callback) {
  let statsDb = dbLoad('stats') || {};
  filesToCopy.forEach(function (file) {
    fs.createReadStream(`./app/templates/${file}`).pipe(fs.createWriteStream(`./output/${file}`));
  });
  fs.writeFile(`./output/stats.html`, template({
    stats: statsDb,
    json: JSON.stringify(statsDb)
  }));
  callback(null, folders);
};
