"use strict";

const node = require("eslint-plugin-node");

module.exports = {
  globals: node.configs["recommended-module"].globals,
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
    },
  },
  rules: {
    "import/no-nodejs-modules": "off",
    "node/file-extension-in-import": "off",
    "node/no-missing-import": ["error", { "tryExtensions": [".ts"] }],
    "node/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
  },
};
