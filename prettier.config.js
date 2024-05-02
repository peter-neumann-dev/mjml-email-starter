/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrder: ['^@/(.*)$', '^[./]'],
}

export default config
