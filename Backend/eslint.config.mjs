import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
];