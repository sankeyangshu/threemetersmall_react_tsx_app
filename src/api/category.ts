/*
 * @Description: 分类模块接口管理
 * @Author: 王振
 * @Date: 2021-09-08 08:59:21
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-08 09:54:29
 */

// 导入http
import http from '@/utils/http';
import { CustomSuccessData } from '@/types';

/**
 * 分类列表响应数据类型
 */
export interface categoryType {
  categoryLevel: string | number;
  categoryName: string;
  content: any;
  id: number;
}

/**
 * @description: 获取分类列表
 * @return 返回分类列表
 */
export async function getCategoryListAPI(): Promise<CustomSuccessData<categoryType[]>> {
  return await http.get('/api/category/getcategory');
}
