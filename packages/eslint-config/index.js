"use strict";

const comments = require("eslint-plugin-eslint-comments");
const imports = require("eslint-plugin-import");
const promise = require("eslint-plugin-promise");
const unicorn = require("eslint-plugin-unicorn");

const rules = {};

for (const rule in comments.rules) {
  if (!comments.rules[rule].meta.deprecated) {
    rules[`eslint-comments/${rule}`] = "error";
  }
}

for (const rule in imports.rules) {
  if (!imports.rules[rule].meta.deprecated) {
    rules[`import/${rule}`] = "error";
  }
}

for (const rule in promise.rules) {
  if (!promise.rules[rule].meta.deprecated) {
    rules[`promise/${rule}`] = "error";
  }
}

for (const rule in unicorn.rules) {
  if (!unicorn.rules[rule].meta.deprecated) {
    rules[`unicorn/${rule}`] = "error";
  }
}

module.exports = {
  extends: ["eslint:all"],
  plugins: [
    "eslint-comments",
    "import",
    "promise",
    "unicorn",
  ],
  rules,
};
