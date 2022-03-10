require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@steadier"],
  ignorePatterns: [
    "!.*",
    "**/*.d.ts",
    "/.cache/**/*",
    "/.yarn/**/*",
    "/build/**/*",
    "/node_modules/**/*",
    "/public/build/**/*",
  ],
  root: true,
  rules: {
    "func-style": "off",
    "no-duplicate-imports": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "prefer-arrow-callback": "off",
    strict: "off",
  },
};
