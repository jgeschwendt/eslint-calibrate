# eslint-calibrate

A collection of opt-out eslint configs.

<br/>

---

<br/>

All rules are enabled, and minimally adjusted to work for specific languages and environements. 
<br /><br/>
Adjust the rules to your style, or turn them off to be less OCD.

<br/>

## Installation (Not Published to NPM yet)

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
    /**
     * Uses rules from:
     *   eslint  
     *   eslint-plugin-eslint-comments
     *   eslint-plugin-import
     *   eslint-plugin-promise
     *   eslint-plugin-unicorn
     */
    '@eslint-calibrate'
  ],
  overrides: [{
    extends: [
      // Uses rules from: @typescript-eslint
      '@eslint-calibrate/typescript'
    ],
    files: ['*.ts', '*.tsx'],
  }, {
    extends: [
      /**
       * Uses rules from: 
       *   eslint-plugin-jsx-a11y
       *   eslint-plugin-react
       *   eslint-plugin-react-hooks
       */
      '@eslint-calibrate/react'
    ],
    files: ['*.jsx', '*.tsx'],
  }, {
    extends: [
      // Uses rules from: eslint-plugin-node
      '@eslint-calibrate/node',
      '@eslint-calibrate/node/module',
    ],
    files: ['*.mjs'],
  }, {
    extends: [
      // Uses rules from: eslint-plugin-node
      '@eslint-calibrate/node',
      '@eslint-calibrate/node/script',
    ],
    files: ['.eslintrc.js', '*.cjs', '*.js'],
  }, {
    extends: [
      // Uses rules from: eslint-plugin-node
      '@eslint-calibrate/node',
      '@eslint-calibrate/node/typescript',
    ],
    files: ['*.server.ts'],
  }, {
    extends: [
      // Uses rules from: eslint-plugin-jest
      '@eslint-calibrate/jest',
    ],
    files: ['*.test.js'],
  }]
}
```