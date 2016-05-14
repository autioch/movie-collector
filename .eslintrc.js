/* global module */
module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true
  },
  globals: {
    reqAbs: 1,
    Promise: 1
  },
  rules: {
    'no-use-before-define': ['error'],
    indent: [
      'error',
      2
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-console': [0]
  }
};
