const fs = require('bluebird').promisifyAll(require('fs'));
const { progressBar, verbose } = require('../../utils');
const flattenDeep = require('lodash.flattendeep');
const workers = require('./workers');

/**
 * Checks videoData for missing or incoherent data.
 * @param  {Object} config         Application config.
 * @param  {Array} videoDataArray  Array of videoData to check.
 * @return {Promise}               Promise resolving to information about file write result.
 */
module.exports = function check(config, videoDataArray) {
  if (!config.check) {
    verbose('TOOL CHECK', 'Disabled');

    return;
  }
  verbose('TOOL CHECK', 'Starting');

  const bar = progressBar('Check data', 1);
  const report = [];

  videoDataArray.forEach((videoData) => {
    const errors = flattenDeep(workers.map((worker) => worker(videoData))).filter((error) => !!error);

    if (errors.length) {
      report.push({
        name: videoData.name,
        errors
      });
    }
  });

  verbose('TOOL CHECK', `Save to ${config.check}.`);

  return fs
    .writeFileAsync(config.check, JSON.stringify(report, null, '  '))
    .tap(() => verbose('TOOL CHECK', 'Saved.'))
    .tap(() => bar.tick());
};
