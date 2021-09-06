/*
 * @Description: px转rem文件
 * @Author: 王振
 * @Date: 2021-09-06 10:20:57
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:20:58
 */
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
    }),
  ],
};
