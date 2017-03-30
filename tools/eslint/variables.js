module.exports = {
  rules: {

    // Require or disallow initialization in variable declarations
    'init-declarations': ['off'],

    // Disallow catch clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': ['error'],

    // Disallow deleting variables
    'no-delete-var': ['error'],

    // Disallow labels that share a name with a variable
    'no-label-var': ['error'],

    // Disallow specified global variables
    'no-restricted-globals': ['error'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': ['error', {
      allow: [],
      builtinGlobals: true,
      hoist: 'all'
    }],

    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': ['error'],

    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': ['error', {
      'typeof': true
    }],

    // Disallow initializing variables to undefined
    'no-undef-init': ['error'],

    // Disallow the use of undefined as an identifier
    'no-undefined': ['error'],

    // Disallow unused variables
    'no-unused-vars': ['error', {
      args: 'all',
      caughtErrors: 'all',
      ignoreRestSiblings: false,
      vars: 'all'
    }],

    // Disallow the use of variables before they are defined
    'no-use-before-define': ['error', {
      classes: true,
      functions: true,
      variables: true
    }]

  }
};
