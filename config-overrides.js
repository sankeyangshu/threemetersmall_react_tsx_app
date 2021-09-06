/*
 * @Description: webpack 配置文件
 * @Author: 王振
 * @Date: 2021-09-06 10:16:23
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:16:24
 */
const { override, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]', // use less-modules
    },
  })
);
