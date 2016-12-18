const { setFolders } = require('./utils');
const prepare = require('./prepare');
const tools = require('./tools');

module.exports = function collector(config) {
  const dataPromise = setFolders(config).then(() => prepare(config));

  return tools
    .filter((tool) => !!config[tool.key])
    .reduce((previousResult, tool) => previousResult.then((videos) => tool.action(videos, config)), dataPromise)
    .catch((err) => console.log(err));
};
