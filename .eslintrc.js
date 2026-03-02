module.exports = {
  env: { node: true, es2024: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'eqeqeq': ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'error'
  }
};