"use strict";

const node = require("eslint-plugin-node");

module.exports = {
  globals: node.configs["recommended-module"].globals,
};
