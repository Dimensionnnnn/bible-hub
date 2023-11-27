module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/jsx-runtime', 'prettier'],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports', 'react', 'react-native'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  ignorePatterns: '**/android/**/*.js',
  globals: {
    JSX: true,
    NodeJS: true,
    Response: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }, { usePrettierrc: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-empty-function': 'off',
    'no-console': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/react-in-jsx-scope': 'off',
  },
};
