/*
 * @Description: eslint配置
 * @Author: 王振
 * @Date: 2021-09-06 10:04:27
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:05:14
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, variables: false }],
  },
};
