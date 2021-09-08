/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-09-06 09:56:36
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-08 09:25:01
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import 'lib-flexible/flexible';
import './styles/base.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
