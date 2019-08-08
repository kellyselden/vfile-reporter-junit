module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    es6: true
  },
  extends: 'sane-node',
  overrides: [
    {
      files: 'test/**/*-test.js',
      env: {
        mocha: true
      },
      plugins: ['mocha'],
      // extends: 'plugin:mocha/recommended',
      rules: Object.assign({}, require('eslint-plugin-mocha').configs.recommended.rules)
    }
  ]
};
