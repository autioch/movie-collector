const throttle = require('lodash.throttle');

const DEFAULT_THROTTTLE = 500;

/**
 * Returns function that allows querying functions to execure;
 * @param  {Number} throttleDuration Duration in miliseconds between each execution.
 * @return {Function} Function that allows adding items to the query.
 */
module.exports = function getQuery(throttleDuration = DEFAULT_THROTTTLE) {
  /* Query of functions to execute */
  const queryArray = [];

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
   * @param  {function} fnToQuery Function that will be queried  for execution.
   * @return {Number} queryLength Amount of function to be executed.
   */
  return function query(fnToQuery) {
    queryArray.push(fnToQuery);
    throttleExecution();

    return queryArray.length;
  };
};
