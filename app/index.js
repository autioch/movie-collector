const Bluebird = require('bluebird');
const tools = require('./tools');

module.exports = function collector(config) {
  const startingPromise = Bluebird.resolve([]);

  return tools

    /* Waterfall of tool promises. Each tool accepts videos and config. Returns promise of videos or videos. */
    .reduce((prevPromise, tool) => prevPromise.then((videos) => tool(videos, config)), startingPromise)
    .catch((err) => console.log(err));
};
