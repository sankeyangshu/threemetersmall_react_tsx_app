/*
 * @Description: 登录注册模块接口管理
 * @Author: 王振
 * @Date: 2021-09-07 09:26:58
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 09:29:31
 */

// 导入http
import http from '@/utils/http';
import { CustomSuccessData } from '@/types';

/**
 * 用户登录注册参数类型
 */
interface LoginAndRegisterParams {
  userName: string;
  password: string;
}

/**
 * @description: 用户注册
 * @param {LoginAndRegisterParams} params 用户注册请求的参数，账号和密码
 * @return  返回请求注册接口的结果
 */
export async function postRegisterAPI(
  params: LoginAndRegisterParams
): Promise<CustomSuccessData<any>> {
  return await http.post('/api/user/register', params);
}

/**
 * @description: 用户登录
 * @param {LoginAndRegisterParams} params 用户登录请求参数，账号和密码
 * @return 返回请求登录接口的结果
 */
export async function postLoginAPI(
  params: LoginAndRegisterParams
): Promise<CustomSuccessData<any>> {
  return await http.post('/api/user/login', params);
}
