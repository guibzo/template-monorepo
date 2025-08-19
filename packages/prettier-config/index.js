import { fileURLToPath } from 'node:url'

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type {PrettierConfig | TailwindConfig} */
const config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-classnames', 'prettier-plugin-merge'],
  tailwindConfig: fileURLToPath(new URL('../tailwind-config/styles/global.css', import.meta.url)),
  tailwindFunctions: ['clsx', 'cva'],
  tailwindAttributes: ['clsx', 'cva'],
  customFunctions: ['clsx', 'cva'],
  singleQuote: true,
  semi: false,
  jsxSingleQuote: true,
  printWidth: 120,
  endingPosition: 'absolute',
  importOrder: [
    '<TYPES>',
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^@valley/(.*)$',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '4.4.0',
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
