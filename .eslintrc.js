'use strict';

const ecmaVersion = 2019;

module.exports = {
  extends: [
    '@eslint-calibrate',
    '@eslint-calibrate/node',
    '@eslint-calibrate/node/script',
    'plugin:@eslint-calibrate/calibrate',
  ],
  parserOptions: {
    ecmaVersion,
  },
  rules: {
    'unicorn/no-useless-spread': 'off',
  },
};
