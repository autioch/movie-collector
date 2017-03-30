module.exports = {
  rules: {

    // Disallow await inside of loops
    'no-await-in-loop': ['error'],

    // Disallow comparing against -0
    'no-compare-neg-zero': ['error'],

    // Disallow assignment operators in conditional expressions
    'no-cond-assign': ['error', 'except-parens'],

    // Disallow the use of console
    'no-console': ['error', {
      allow: ['warn']
    }],

    // Disallow constant expressions in conditions
    'no-constant-condition': ['error', {
      checkLoops: true
    }],

    // Disallow control characters in regular expressions
    'no-control-regex': ['error'],

    // Disallow the use of debugger
    'no-debugger': ['error'],

    // Disallow duplicate arguments in function definitions
    'no-dupe-args': ['error'],

    // Disallow duplicate keys in object literals
    'no-dupe-keys': ['error'],

    // Disallow duplicate case labels
    'no-duplicate-case': ['error'],

    // Disallow empty block statements
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],

    // Disallow empty character classes in regular expressions
    'no-empty-character-class': ['error'],

    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': ['error'],

    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': ['error'],

    // Disallow unnecessary parentheses
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      ignoreJSX: 'all',
      nestedBinaryExpressions: false,
      returnAssign: true
    }],

    // Disallow unnecessary semicolons
    'no-extra-semi': ['error'],

    // Disallow reassigning function declarations
    'no-func-assign': ['error'],

    // Disallow variable or function declarations in nested blocks
    'no-inner-declarations': ['error', 'both'],

    // Disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': ['error', {
      allowConstructorFlags: []
    }],

    // Disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': ['error', {
      skipComments: false,
      skipRegExps: false,
      skipStrings: false,
      skipTemplates: false
    }],

    // Disallow calling global object properties as functions
    'no-obj-calls': ['error'],

    // Disallow calling some Object.prototype methods directly on objects
    'no-prototype-builtins': ['off'],

    // Disallow multiple spaces in regular expressions
    'no-regex-spaces': ['error'],

    // Disallow sparse arrays
    'no-sparse-arrays': ['error'],

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': ['error'],

    // Disallow confusing multiline expressions
    'no-unexpected-multiline': ['error'],

    // Disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': ['error'],

    // Disallow control flow statements in finally blocks
    'no-unsafe-finally': ['error'],

    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': ['error'],

    // Require calls to isNaN() when checking for NaN
    'use-isnan': ['error'],

    // Enforce valid JSDoc comments
    'valid-jsdoc': ['error', {
      matchDescription: '.+',
      prefer: {
        arg: 'param',
        argument: 'param',
        'class': 'constructor',
        virtual: 'abstract'
      },
      preferType: {},
      requireParamDescription: true,
      requireReturn: true,
      requireReturnDescription: true,
      requireReturnType: true
    }],

    // Enforce comparing typeof expressions against valid strings
    'valid-typeof': ['error', {
      requireStringLiterals: false
    }]

  }
};
