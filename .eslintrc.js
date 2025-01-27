module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/await-thenable': 'error',
    quotes: ['error', 'single'],
    'object-shorthand': ['error', 'always'],
    "@typescript-eslint/no-unnecessary-condition": "error",
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  globals: {
    React: 'writable',
  },
}
