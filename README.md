# eslint-calibrate

[![Node.js CI](https://github.com/jgeschwendt/eslint-calibrate/actions/workflows/node.yml/badge.svg)](https://github.com/jgeschwendt/eslint-calibrate/actions/workflows/node.yml)

## A collection of opt-out eslint configs.

All rules are enabled, and minimally adjusted to work for specific languages and environements.
<br/>
<br/>
Adjust the rules to your style, or turn them off to be less OCD.
<br/>

## Installation

```shell
# eslint-calibrate depends on eslint
npm install --save-dev eslint


# Base Config
# Uses:
#   eslint
#   eslint-plugin-eslint-comments
#   eslint-plugin-import
#   eslint-plugin-promise
#   eslint-plugin-unicorn
npm install --save-dev @eslint-calibrate/eslint-config


#
# Language configs
#

# TypeScript
# Uses:
#   @typescript-eslint/eslint-plugin
#   eslint-plugin-import
npm install --save-dev @eslint-calibrate/eslint-typescript


#
# Environment/Package configs
#

# Node.js
# Uses:
#   eslint-plugin-import
#   eslint-plugin-node
npm install --save-dev @eslint-calibrate/eslint-node

# React
# Uses:
#   eslint-plugin-jsx-a11y
#   eslint-plugin-react
#   eslint-plugin-react-hooks
npm install --save-dev @eslint-calibrate/eslint-react

# Jest
# Uses:
#   @typescript-eslint/eslint-plugin
#   eslint-plugin-import
npm install --save-dev @eslint-calibrate/eslint-jest
```

<br/>

## Sample `.eslintrc.js`

```javascript
module.exports = {
  extends: ['@eslint-calibrate'],
  overrides: [
    {
      extends: ['@eslint-calibrate/typescript'],
      files: ['*.ts', '*.tsx'],
    },
    {
      extends: ['@eslint-calibrate/react'],
      files: ['*.jsx', '*.tsx'],
    },
    {
      extends: ['@eslint-calibrate/node', '@eslint-calibrate/node/module'],
      files: ['*.mjs'],
    },
    {
      extends: ['@eslint-calibrate/node', '@eslint-calibrate/node/script'],
      files: ['.eslintrc.js', '*.cjs', '*.js'],
    },
    {
      extends: ['@eslint-calibrate/node', '@eslint-calibrate/node/typescript'],
      files: ['*.server.ts'],
    },
    {
      extends: ['@eslint-calibrate/jest'],
      files: ['*.test.js'],
    },
  ],
};
```
