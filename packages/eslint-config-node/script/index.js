"use strict";

const node = require("eslint-plugin-node");

module.exports = {
  globals: node.configs["recommended-script"].globals,
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
    },
    sourceType: "script",
  },
  rules: {
    "import/no-commonjs": "off",
  },
};
