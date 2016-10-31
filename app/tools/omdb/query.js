const throttle = require('lodash.throttle');

/**
 * Array of `queryFunc` functions to execute.
 * @type {Array}
 */
let queryArray = [];


/**
 * Retrieves first function in a query, executes it and throttles next request.
 * @method executeRequest
 */
function executeFunction() {
  if (queryArray.length) {
    queryArray.pop()();
    throttleExecution();
  }
}

/**
 * Execute request wrapped so it will execute only once every 500ms.
 * @method throttleRequest
 */
const throttleExecution = throttle(executeFunction, 500);


/**
 * Enqueues function to be executed.
 * @method functionQuery
 * @param  {function} funcToQuery Function that will be queried  for execution.
 * @return {integer} queryLength Amount of function to be queried.
 */
module.exports = function query(funcToQuery) {
  queryArray.push(funcToQuery);
  throttleExecution();
  return queryArray.length;
};
