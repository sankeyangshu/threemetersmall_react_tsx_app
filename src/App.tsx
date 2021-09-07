/*
 * @Description: 全局根组件
 * @Author: 王振
 * @Date: 2021-09-06 09:56:36
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 10:27:25
 */
import React, { useEffect, useState, Fragment } from 'react';
import routes from '@/router';
import { Switch, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import NavBar from '@/components/NavBar';
import FrontendAuth from '@/components/FrontendAuth';

const App = () => {
  const location = useLocation(); // 获取location实例
  const { pathname } = location; // 获取当前路径
  const needNav = ['/', '/category', '/flow', '/mine']; // 需要显示底部导航条的路由
  const [showNav, setShowNav] = useState(false); // 是否展示Nav

  // 当组件渲染和路径发生改变时，执行该函数
  useEffect(() => {
    setShowNav(needNav.includes(pathname));
  }, [pathname]);

  return (
    <Fragment>
      <ConfigProvider primaryColor={'#3fbb47'} locale={zhCN}>
        <Switch>
          {/* 使用高阶组件实现路由守卫功能 */}
          <FrontendAuth config={routes} />
        </Switch>
      </ConfigProvider>
      <NavBar showNav={showNav} />
    </Fragment>
  );
};

export default App;
