const Bluebird = require('bluebird');
const tools = require('./tools');

module.exports = function collector(config) {
  return tools
    .reduce((previousPromise, tool) => previousPromise.then((videos) => tool(videos, config)), Bluebird.resolve([]))
    .catch((err) => console.log(err));
};
