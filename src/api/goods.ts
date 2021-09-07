/*
 * @Description: 商品模块接口管理
 * @Author: 王振
 * @Date: 2021-09-07 14:55:54
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 15:17:30
 */

// 导入http
import http from '@/utils/http';
import { CustomSuccessData, goodsType } from '@/types';

// 商品列表页请求参数数据类型
interface goodsListParams {
  categoryId?: number;
  pageIndex: number;
  pageSize: number;
}

// 商品详情页请求参数数据类型
interface goodsDetailParams {
  id: number;
}

// 商品列表数据响应数据类型
interface goodsListResponse {
  count: number;
  goodsList: goodsType[];
  isEmpty: boolean;
  pageIndex: number;
  pageSize: number;
}

/**
 * @description: 获取商品列表数据
 * @param {goodsListParams} params 请求参数-分类id，页面，每页多少条
 * @return {*}
 */
export function getGoodsListAPI(
  params: goodsListParams
): Promise<CustomSuccessData<goodsListResponse>> {
  return http.get('/api/goods/goodslist', params);
}

/**
 * @description: 获取商品详情数据
 * @param {goodsDetailParams} params 请求参数，商品id
 * @return {*}
 */
export function getGoodsDetailAPI(params: goodsDetailParams): Promise<CustomSuccessData<any>> {
  return http.get('/api/goods/goodsdetail', params);
}
