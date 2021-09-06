/*
 * @Description: action 方法
 * @Author: 王振
 * @Date: 2021-09-06 10:32:05
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:32:05
 */

import actionTypes from '../actionTypes';

export const setStoreData = (type: string, payload: any): object => {
  if (!actionTypes[type]) throw new Error('请传入修改的数据类型和值');
  return { type, payload };
};
