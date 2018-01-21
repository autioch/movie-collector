module.exports = function curry(fn, argumentCount = fn.length) {
  return function currying(...args) {
    if (args.length >= argumentCount) {
      return fn(...args);
    }

    return (...args2) => currying(...args.concat(args2));
  };
};
