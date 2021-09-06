/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-09-06 09:56:36
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:25:14
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible/flexible';
import './styles/base.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
