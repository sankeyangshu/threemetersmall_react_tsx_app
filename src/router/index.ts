/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-09-06 10:45:49
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:45:50
 */
import Home from '@/pages/Home';
import Login from '@/pages/Login';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
];

export default routes;
