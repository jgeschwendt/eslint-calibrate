'use strict';

module.exports = {
  overrides: [
    {
      extends: [
        '@eslint-calibrate',
        '@eslint-calibrate/node',
        '@eslint-calibrate/node/module',
        '@eslint-calibrate/typescript',
        'plugin:@eslint-calibrate/calibrate',
        'plugin:@eslint-calibrate/typescript',
      ],
      files: ['*.ts'],
      parserOptions: {
        project: 'examples/fastify/tsconfig.json',
      },
      rules: {
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        'import/no-named-export': 'off',
        'import/prefer-default-export': 'off',
        'node/file-extension-in-import': ['error', 'never'],
        'node/no-unsupported-features/es-syntax': 'off',
      },
    },
    {
      extends: ['@eslint-calibrate/jest'],
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-magic-numbers': 'off',
      },
    },
  ],
  root: true,
  settings: {
    'import/extensions': ['.ts'],
    'jest': {
      version: 'detect',
    },
    'node': {
      tryExtensions: ['.ts'],
    },
  },
};
