/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-09-06 10:45:49
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 14:09:24
 */
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Category from '@/pages/Category';
import Flow from '@/pages/Flow';
import Mine from '@/pages/Mine';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/flow',
    component: Flow,
  },
  {
    path: '/mine',
    component: Mine,
  },
];

export default routes;
