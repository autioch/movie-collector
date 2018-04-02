// TODO Adapt to https://github.com/yannickcr/eslint-plugin-react
module.exports = {
  extends: 'qb',
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'class-methods-use-this': ['off'],
    'id-blacklist': ['off'],
    'line-comment-position': ['off'],
    'no-unused-vars': ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'no-inline-comments': ['off'],
    'no-undefined': ['off'],
    'no-magic-numbers': ['off'],
    'no-console': ['off'],
    'no-plusplus': ['off'],
    'camelcase': ['off'],
    'id-length': ['off'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  }
};
