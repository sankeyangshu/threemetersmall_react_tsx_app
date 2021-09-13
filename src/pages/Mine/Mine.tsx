/*
 * @Description: 我的模块
 * @Author: 王振
 * @Date: 2021-09-06 14:07:38
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-13 10:31:11
 */
import React from 'react';
import moduleCss from './Mine.module.less';
import CustomIcon from '@/components/CustomIcon';
import actionTypes from '@/store/actionTypes';
import { Cell } from 'zarm';
import { useDispatch } from 'react-redux';
import { setStoreData } from '@/store/actions';

const Mine = () => {
  const dispatch = useDispatch(); // 获取redux的派发方法
  const girdList = [
    { icon: 'icondingwei-', title: '全部订单' },
    { icon: 'icondaifukuan', title: '待付款' },
    { icon: 'icondaifahuo', title: '待发货' },
    { icon: 'icondaishouhuo', title: '待收货' },
  ]; // 宫格列表

  // 循环宫格
  const grid = () => {
    return girdList.map((item, index) => {
      return (
        <div className={moduleCss.grid} key={index}>
          <div className={moduleCss.grid__icon}>
            <CustomIcon type={item.icon} />
          </div>
          <div className={moduleCss.grid__title}>{item.title}</div>
        </div>
      );
    });
  };

  // 退出登录
  const logout = () => {
    // 清除个人信息，退出登录
    dispatch(setStoreData(actionTypes.SET_USERINFO.name, {}));
  };
  return (
    <div className={moduleCss.mine}>
      <div className={moduleCss.total}>
        <div className={moduleCss.personal__center}>
          <div className={moduleCss.personal__center__avatarImg}>
            <img width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div className={moduleCss.personal__center__nickname}>一号会员</div>
        </div>
        <div className={moduleCss.order}>
          <div className={moduleCss.total__order}>
            <div className={moduleCss.order__title}>我的订单</div>
            <div className={moduleCss.order__isLink}>
              全部订单
              <CustomIcon type="iconjiantou" />
            </div>
          </div>
          <div className={moduleCss.grid__order}>{grid()}</div>
        </div>
      </div>
      <Cell hasArrow title="收货地址" onClick={() => {}} />
      <Cell hasArrow title="我的帮助" onClick={() => {}} />
      <Cell hasArrow title="关于我们" onClick={() => {}} />
      <Cell hasArrow title="退出账号" onClick={() => logout()} />
    </div>
  );
};

export default Mine;
