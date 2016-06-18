const config = reqAbs('config');
const cacheLoad = reqAbs('collector/utils/cacheLoad');

const possibleSteps = [
  'parseDir',
  'parseVideo',
  'ffProbe',
  'queryOmdb',
  'stat'
];

function prepareStep(stepName) {
  if (possibleSteps.indexOf(stepName) === -1) {
    console.log(`Unknown step '${stepName}' declared in config.`);
    return null;
  }
  let preparedStep = null;
  try {
    preparedStep = {
      key: stepName,
      method: require(`./${stepName}`)
    };
  } catch (e) {
    console.log(`Failed to require '${stepName}' declared in config.`);
  }
  return preparedStep;
}

function getStartingValue(steps) {
  if (!steps.length) {
    return null;
  }
  if (config.steps[0] === 'parseDir') {
    return config.rootPath;
  }
  const currentIndex = possibleSteps.indexOf(config.steps[0].key);
  if (currentIndex === -1) {
    return null;
  }
  const previousStep = possibleSteps[currentIndex - 1];
  return cacheLoad(previousStep.key);
}

const preparedSteps = config.steps.map(prepareStep);

module.exports = {
  steps: preparedSteps,
  startingValue: getStartingValue(preparedSteps)
};
