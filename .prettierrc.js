module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'crlf',
  tabWidth: 2,
  printWidth: 100,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@app',
    '^@pages',
    '^@widgets',
    '^@features',
    '^@entities',
    '^@shared/(.*)$',
    '^[./]',
  ],
};

