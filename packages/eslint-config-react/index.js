"use strict";

const jsxA11y = require("eslint-plugin-jsx-a11y");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

const rules = {};

for (const rule in jsxA11y.rules) {
  if (!jsxA11y.rules[rule].meta.deprecated) {
    rules[`jsx-a11y/${rule}`] = "error";
  }
}

for (const rule in react.rules) {
  if (!react.rules[rule].meta.deprecated) {
    rules[`react/${rule}`] = "error";
  }
}

for (const rule in reactHooks.rules) {
  if (!reactHooks.rules[rule].meta.deprecated) {
    rules[`react-hooks/${rule}`] = "error";
  }
}

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  rules,
};
