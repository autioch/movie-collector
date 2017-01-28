const throttle = require('lodash.throttle');

const queryArray = [];

const throttleDuration = 500;

/**
 * Retrieves first function in a query, executes it and throttles next request.
 * @return {undefined} Nothing
 */
function executeFunction() {
  if (queryArray.length) {
    queryArray.pop()();
    throttleExecution(); //eslint-disable-line
  }
}

const throttleExecution = throttle(executeFunction, throttleDuration);

/**
 * Enqueues function to be executed.
 * @param  {function} funcToQuery Function that will be queried  for execution.
 * @return {Number} queryLength Amount of function to be queried.
 */
module.exports = function query(funcToQuery) {
  queryArray.push(funcToQuery);
  throttleExecution();

  return queryArray.length;
};
