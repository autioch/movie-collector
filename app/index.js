const Bluebird = require('bluebird');
const tools = require('./tools');

module.exports = function collector(config) {
  return tools
    .filter((tool) => !!config[tool.key])
    .reduce((previousResult, tool) => previousResult.then((videos) => tool.action(videos, config)), Bluebird.resolve([]))
    .catch((err) => console.log(err));
};
