"use strict";

const comments = require("eslint-plugin-eslint-comments");
const imports = require("eslint-plugin-import");

const rules = {};

Object.keys(comments.rules).forEach((rule) => {
  if (!comments.rules[rule].meta.deprecated) {
    rules[`eslint-comments/${rule}`] = "error";
  }
});

Object.keys(imports.rules).forEach((rule) => {
  if (!imports.rules[rule].meta.deprecated) {
    rules[`import/${rule}`] = "error";
  }
});

module.exports = {
  extends: ["eslint:all"],
  plugins: [
    "eslint-comments",
    "import",
  ],
  rules,
};
