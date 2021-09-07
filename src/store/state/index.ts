/*
 * @Description: state 文件-数据集合
 * @Author: 王振
 * @Date: 2021-09-06 10:34:14
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 11:14:48
 */

export interface StoreState {
  userInfo: {
    userInfo: {
      id: number;
      nickName: string;
      picture: string;
      userName: string;
    };
    token: string;
  };
}

export const initState: StoreState = {
  userInfo: {
    userInfo: {
      id: 0, // 用户id
      nickName: '', // 用户昵称
      picture: '', // 用户头像
      userName: '', // 用户账户
    },
    token: '',
  }, // 用户信息
};
