/*
 * @Description: 全局类型推断
 * @Author: 王振
 * @Date: 2021-09-06 10:36:08
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:36:08
 */

export type CommonObject<T = any> = Record<string, T>;

export interface ReduxProps<T> {
  storeData: T;
  setStoreData?: (type: string, payload: any) => object;
}
