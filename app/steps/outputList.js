'use strict';

let fs = require('fs');
let _ = require('lodash');
let dbLoad = requireFrom('app/dbLoad');
const template = _.template(fs.readFileSync('./app/templates/list.html').toString());
const filesToCopy = [
  'jquery-2.1.1.min.js',
  'jquery.dataTables.min.js',
  'list.js',
  'list.css'
];

module.exports = function (folders, callback) {
  let statsDb = dbLoad('stats') || {};
  filesToCopy.forEach(function (file) {
    fs.createReadStream(`./app/templates/${file}`).pipe(fs.createWriteStream(`./output/${file}`));
  });
  fs.writeFile(`./output/list.html`, template({
    folders: folders,
    stats: statsDb
  }));
  callback(null, folders);
};
