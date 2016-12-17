const config = require('../config');
const chalk = require('chalk');

const prefix = chalk.gray('MC');

module.exports = function verbose(namespace, message) {
  if (config.verbose) {
    console.log(prefix, chalk.gray(new Date().toTimeString().substr(0, 8)), chalk.cyan(namespace), message);
  }
};
