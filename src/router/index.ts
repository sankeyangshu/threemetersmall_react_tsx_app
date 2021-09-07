/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-09-06 10:45:49
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 10:08:48
 */
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Category from '@/pages/Category';
import Flow from '@/pages/Flow';
import Mine from '@/pages/Mine';
import { routerConfigModel } from '@/types';

const routes: routerConfigModel[] = [
  {
    path: '/',
    component: Home,
    auth: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/category',
    component: Category,
    auth: true,
  },
  {
    path: '/flow',
    component: Flow,
    auth: true,
  },
  {
    path: '/mine',
    component: Mine,
    auth: true,
  },
];

export default routes;
