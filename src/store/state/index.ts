/*
 * @Description: state 文件-数据集合
 * @Author: 王振
 * @Date: 2021-09-06 10:34:14
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:34:15
 */

export interface StoreState {
  userInfo: {
    userName: string;
    token: string;
  };
}

export const initState: StoreState = {
  userInfo: {
    userName: '',
    token: '',
  }, // 用户信息
};
