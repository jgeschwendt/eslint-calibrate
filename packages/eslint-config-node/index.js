"use strict";

const node = require("eslint-plugin-node");

const rules = {};

for (const rule in node.rules) {
  if (!node.rules[rule].meta.deprecated) {
    rules[`node/${rule}`] = "error";
  }
}

module.exports = {
  env: {
    node: true,
  },
  plugins: ["node"],
  rules,
};
