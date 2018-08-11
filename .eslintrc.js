module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: [
    "prettier",
    "prettier/standard",
    "plugin:vue/recommended"
  ],
  plugins: [
    "vue",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "vue/max-attributes-per-line": "off"
  }
};
