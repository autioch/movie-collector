module.exports = {
  rules: {

    // Require return statements after callbacks
    'callback-return': ['warn', ['callback'] ],

    // Require require() calls to be placed at top-level module scope
    'global-require': ['off'],

    // Require error handling in callbacks
    'handle-callback-err': ['error', 'err'],

    // Disallow require calls to be mixed with regular variable declarations
    'no-mixed-requires': ['error', {
      allowCall: false,
      grouping: true
    }],

    // Disallow new operators with calls to require
    'no-new-require': ['error'],

    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': ['error'],

    // Disallow the use of process.env
    'no-process-env': ['error'],

    // Disallow the use of process.exit()
    'no-process-exit': ['error'],

    // Disallow specified modules when loaded by require
    'no-restricted-modules': ['error', 'repl'],

    // Disallow synchronous methods
    'no-sync': ['error']

  }
};
