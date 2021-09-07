/*
 * @Description: 登录模块页面
 * @Author: 王振
 * @Date: 2021-09-06 10:47:18
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 11:19:47
 */
import React, { useState, useCallback } from 'react';
import Captcha from 'react-captcha-code';
import moduleCss from './Login.module.less';
import CustomIcon from '@/components/CustomIcon';
import actionTypes from '@/store/actionTypes';
import { Cell, Input, Button, Checkbox, Toast } from 'zarm';
import { postRegisterAPI, postLoginAPI } from '@/api/login';
import { useDispatch } from 'react-redux';
import { setStoreData } from '@/store/actions';

const Login: React.FC = () => {
  const [userName, setUserName] = useState(''); // 账号
  const [password, setPassword] = useState(''); // 密码
  const [verify, setVerify] = useState(''); // 验证码
  const [captcha, setCaptcha] = useState(''); // 图片中验证码
  const [type, setType] = useState('login'); // 登录注册类型
  const dispatch = useDispatch(); // 获取redux的派发方法

  // 当验证码发生变化，执行该函数
  const handleChange = useCallback((captcha) => {
    setCaptcha(captcha);
  }, []);

  // 提交登录注册
  const onSubmit = async () => {
    if (!userName) {
      Toast.show('请输入账号');
      return;
    }
    if (!password) {
      Toast.show('请输入密码');
      return;
    }
    try {
      // 判断登录状态
      if (type === 'login') {
        // 执行登录方法
        const res = await postLoginAPI({ userName, password });
        // 保存token到redux仓库中,实现token的持久化存储
        localStorage.setItem('token', res.data.token);
        dispatch(setStoreData(actionTypes.SET_USERINFO.name, res.data));
        Toast.show('登录成功');
      } else {
        if (!verify) {
          Toast.show('请输入验证码');
          return;
        }
        if (verify !== captcha) {
          Toast.show('验证码错误');
          return;
        }
        const res = await postRegisterAPI({ userName, password });
        if (res.code === 0) {
          Toast.show('注册成功');
          setType('login');
        }
      }
    } catch (error: any) {
      Toast.show(error.message);
    }
  };

  return (
    <div className={moduleCss.auth}>
      <div className={moduleCss.head} />
      <div className={moduleCss.tab}>
        <span
          className={moduleCss[type === 'login' ? 'active' : '']}
          onClick={() => setType('login')}
        >
          登录
        </span>
        <span
          className={moduleCss[type === 'register' ? 'active' : '']}
          onClick={() => setType('register')}
        >
          注册
        </span>
      </div>
      <div className={moduleCss.form}>
        <Cell icon={<CustomIcon type="zhanghao" />}>
          <Input
            clearable
            type="text"
            placeholder="请输入账号"
            onChange={(value) => setUserName(value)}
          />
        </Cell>
        <Cell icon={<CustomIcon type="mima" />}>
          <Input
            clearable
            type="password"
            placeholder="请输入密码"
            onChange={(value) => setPassword(value as string)}
          />
        </Cell>
        {type === 'register' ? (
          <Cell icon={<CustomIcon type="mima" />}>
            <Input
              clearable
              type="text"
              placeholder="请输入验证码"
              onChange={(value) => setVerify(value)}
            />
            <Captcha charNum={4} onChange={handleChange} />
          </Cell>
        ) : null}
      </div>
      <div className={moduleCss.operation}>
        {type === 'register' ? (
          <div className={moduleCss.agree}>
            <Checkbox />
            <label className="text-light">
              阅读并同意<a>《三米商城条款》</a>
            </label>
          </div>
        ) : null}
        <Button block theme="primary" onClick={onSubmit}>
          {type === 'login' ? '登录' : '注册'}
        </Button>
      </div>
    </div>
  );
};

export default Login;
