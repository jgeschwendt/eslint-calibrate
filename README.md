# eslint-calibrate

[![Node.js CI](https://github.com/jgeschwendt/eslint-calibrate/actions/workflows/node.yml/badge.svg)](https://github.com/jgeschwendt/eslint-calibrate/actions/workflows/node.yml)

A collection of opt-out eslint configs.
---
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
npm install --save-dev @eslint-calibrate/eslint-config

# Language configs
npm install --save-dev @eslint-calibrate/eslint-typescript

# Environment/Package configs
npm install --save-dev @eslint-calibrate/eslint-node
npm install --save-dev @eslint-calibrate/eslint-react
npm install --save-dev @eslint-calibrate/eslint-jest
```

<br/>

## Sample `.eslintrc.js`
```javascript
module.exports = {
  extends: [
    // eslint  
    // eslint-plugin-eslint-comments
    // eslint-plugin-import
    // eslint-plugin-promise
    // eslint-plugin-unicorn
    '@eslint-calibrate'
  ],
  overrides: [{
    extends: [
      // @typescript-eslint
      '@eslint-calibrate/typescript'
    ],
    files: ['*.ts', '*.tsx'],
  }, {
    extends: [
      // eslint-plugin-jsx-a11y
      // eslint-plugin-react
      // eslint-plugin-react-hooks
      '@eslint-calibrate/react'
    ],
    files: ['*.jsx', '*.tsx'],
  }, {
    extends: [
      // eslint-plugin-node
      '@eslint-calibrate/node',
      '@eslint-calibrate/node/module',
    ],
    files: ['*.mjs'],
  }, {
    extends: [
      // eslint-plugin-node
      '@eslint-calibrate/node',
      '@eslint-calibrate/node/script',
    ],
    files: ['.eslintrc.js', '*.cjs', '*.js'],
  }, {
    extends: [
      // eslint-plugin-node
      '@eslint-calibrate/node',
      '@eslint-calibrate/node/typescript',
    ],
    files: ['*.server.ts'],
  }, {
    extends: [
      // eslint-plugin-jest
      '@eslint-calibrate/jest',
    ],
    files: ['*.test.js'],
  }]
}
```
