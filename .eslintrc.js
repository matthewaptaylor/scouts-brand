module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended', 'prettier'],
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        printWidth: 100,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
