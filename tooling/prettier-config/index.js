/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type {PrettierConfig | TailwindConfig} */
const config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-classnames', 'prettier-plugin-merge'],
  tailwindStylesheet: '../tailwind-config/src/styles/global.css',
  tailwindFunctions: ['clsx', 'cva'],
  tailwindAttributes: ['clsx', 'cva'],
  customFunctions: ['clsx', 'cva'],
  singleQuote: true,
  semi: false,
  jsxSingleQuote: true,
  printWidth: 120,
  endingPosition: 'absolute',
  overrides: [
    {
      files: '*.json.hbs',
      options: { parser: 'json' },
    },
    {
      files: '*.js.hbs',
      options: { parser: 'babel' },
    },
  ],
}

export default config
