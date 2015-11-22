'use strict';

global.requireFrom = function (path) {
  return require.main.require(`./${path}`);
};

let app = requireFrom('app');
let inExecution = false;
let data = false;
let steps = app.config.steps;

function initData(index) {
  console.log(`Init: ${index}`);
  inExecution = true;
  if (index === 0) {
    data = app.config.rootPath;
  } else {
    data = app.cacheLoad(steps[index - 1].module);
  }
}

function saveStep(index) {
  if (!data) {
    return console.log(`Data nothing to save.`);
  }
  console.log(`Save: ${index}`);
  return app.cacheSave(steps[index].module, data);
}

function executeStep(index) {
  let step = steps[index];
  console.log(`Execute: ${index} (${step.module})`);
  app[step.module](data, function (err, result) {
    if (err) {
      return console.log(err);
    }
    data = result;
    saveStep(index);
    setTimeout(callStep, 0, index + 1);
  });
}

function callStep(index) {
  let step = steps[index];
  if (!step) {
    return saveStep(index - 1);
  }
  if (step.execute) {
    if (!inExecution) {
      initData(index);
    }
    executeStep(index);
  } else {
    if (inExecution) {
      saveStep(index - 1);
    } else {
      console.log(`Skip: ${index}`);
      callStep(index + 1);
    }
  }
}

callStep(0);
