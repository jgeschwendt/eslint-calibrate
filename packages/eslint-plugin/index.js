"use strict";

const LINE_LENGTH = 120;
const TAB_SIZE = 2;

module.exports = {
  configs: {
    "calibrate": {
      rules: {
        "eslint-comments/no-use": "off",
        "import/order": ["error", {
          "alphabetize": {
            caseInsensitive: false,
            order: "asc",
          },
          "groups": [["builtin", "external"], "index", "sibling", "parent"],
          "newlines-between": "never",
          "pathGroups": [{
            group: "external",
            pattern: "@*/**",
            position: "before",
          }],
        }],
        "sort-imports": "off",

        // Stylistic
        ...{
          "array-bracket-newline": ["error", "consistent"],
          "array-element-newline": ["error", "consistent"],
          "comma-dangle": ["error", "always-multiline"],
          "dot-location": ["error", "property"],
          "function-call-argument-newline": ["error", "consistent"],
          "indent": ["error", TAB_SIZE],
          "max-len": ["error", LINE_LENGTH],
          "multiline-ternary": ["error", "always-multiline"],
          "no-magic-numbers": ["error", {
            detectObjects: true,
            enforceConst: true,
          }],
          "no-multiple-empty-lines": ["error", {
            /* eslint-disable no-magic-numbers -- config */
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
            /* eslint-enable no-magic-numbers -- config */
          }],
          "no-ternary": "off",
          "object-curly-spacing": ["error", "always"],
          "object-property-newline": ["error", {
            allowAllPropertiesOnSameLine: true,
          }],
          "one-var": ["error", "never"],
          "padded-blocks": ["error", "never"],
          "quote-props": ["error", "consistent"],
        },
      },
    },
    "typescript": {
      rules: {
        // Not supported since TypeScript#4.0.0
        "@typescript-eslint/no-implicit-any-catch": "off",

        // TypeScript uses the void keyword
        "no-void": "off",

        // Stylistic
        ...{
          "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
          "@typescript-eslint/consistent-type-definitions": ["error", "type"],
          "@typescript-eslint/indent": ["error", TAB_SIZE],
          "@typescript-eslint/naming-convention": ["error", {
            format: ["camelCase"],
            leadingUnderscore: "allow",
            selector: "default",
            trailingUnderscore: "allow",
          }, {
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            selector: "variable",
            trailingUnderscore: "allow",
          }, {
            format: ["PascalCase"],
            selector: "typeLike",
          }],
          "@typescript-eslint/no-extra-parens": "off",
          "@typescript-eslint/no-type-alias": "off",
          "@typescript-eslint/prefer-readonly-parameter-types": ["error", {
            checkParameterProperties: false,
            ignoreInferredTypes: true,
          }],
        },
      },
    },
  },
};
