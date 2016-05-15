/* global module */
module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
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
    ]
  }
};
