global.reqAbs = require('app-root-path').require;
const steps = require('./steps');
const config = reqAbs('config');
const cacheLoad = reqAbs('app/utils/cacheLoad');

const stepsToExecute = steps.filter(step => config.steps.indexOf(step.key) > -1);

let startingValue;

if (stepsToExecute.length) {
  const firstStep = stepsToExecute[0];
  if (firstStep.startingValue) {
    startingValue = firstStep.startingValue;
  } else {
    const previousStep = steps[steps.indexOf(firstStep) - 1];
    startingValue = cacheLoad(previousStep.key);
  }
}

module.exports = {
  steps: stepsToExecute,
  startingValue: startingValue
};
