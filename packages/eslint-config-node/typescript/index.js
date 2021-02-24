"use strict";

const node = require("eslint-plugin-node");

module.exports = {
  globals: node.configs["recommended-module"].globals,
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
    },
    sourceType: "module",
  },
  rules: {
    // TSC handles missing import errors
    "node/no-missing-import": "off",

    // TS Syntax Features
    "node/no-unsupported-features/es-syntax": ["error", {
      ignores: [
        "dynamicModules",
        "modules",
      ],
    }],
  },
};
