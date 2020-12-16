"use strict";

const node = require("eslint-plugin-node");

const rules = {};

Object.keys(node.rules).forEach((rule) => {
  if (!node.rules[rule].meta.deprecated) {
    rules[`node/${rule}`] = "error";
  }
});

module.exports = {
  env: {
    node: true,
  },
  plugins: ["node"],
  rules,
};
