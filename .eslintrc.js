module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "next",
    "plugin:react/recommended",
    "google",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "require-jsdoc": "off",
    "react/react-in-jsx-scope": "off",
    "@next/next/no-img-element": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
