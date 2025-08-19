import { FlatCompat } from '@eslint/eslintrc'
import { config as baseConfig } from './base.js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...baseConfig,
  ...compat.config({
    extends: ['next'],
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'error',
      'react-hooks/rules-of-hooks': 'off',
    },
  }),
]

export default eslintConfig
