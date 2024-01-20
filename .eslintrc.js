module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
      parser: "@typescript-eslint/parser",
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/no-unescaped-entities": "off",
        "react/jsx-uses-react": "on",
      },
    },
  ],
};
