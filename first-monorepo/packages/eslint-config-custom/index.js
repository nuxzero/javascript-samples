module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    // babelOptions: {
    //   presets: [require.resolve("next/babel")],
    // },
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
