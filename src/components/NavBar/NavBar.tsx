/*
 * @Description: 底部导航条组件
 * @Author: 王振
 * @Date: 2021-08-31 10:41:00
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 14:10:58
 */

import React, { useState } from 'react';
import { TabBar } from 'zarm';
import moduleCss from './NavBar.module.less';
import { useHistory } from 'react-router-dom';
import CustomIcon from '../CustomIcon';

interface NavBarType {
  showNav: boolean;
}

const NavBar: React.FC<NavBarType> = ({ showNav }) => {
  // 是否选中该导航
  const [activeKey, setActiveKey] = useState('/');
  // 获取路由跳转方法实例
  const history = useHistory();

  // 点击跳转
  const changeTab = (path) => {
    setActiveKey(path);
    history.push(path);
  };

  return (
    <TabBar visible={showNav} className={moduleCss.tab} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item itemKey="/" title="首页" icon={<CustomIcon type="iconshouye" />} />
      <TabBar.Item itemKey="/category" title="分类" icon={<CustomIcon type="iconfenlei" />} />
      <TabBar.Item itemKey="/flow" title="购物车" icon={<CustomIcon type="icongouwuche" />} />
      <TabBar.Item itemKey="/mine" title="我的" icon={<CustomIcon type="icongerenzhongxin" />} />
    </TabBar>
  );
};

export default NavBar;
