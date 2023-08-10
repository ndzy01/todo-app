module.exports = {
  printWidth: 120,
  proseWrap: 'never',
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  semi: true,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'never',
      },
    },
  ],
};
