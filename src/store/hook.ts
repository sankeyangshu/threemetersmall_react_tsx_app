/*
 * @Description: 使用hooks链接redux
 * @Author: 王振
 * @Date: 2021-09-06 10:34:48
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-06 10:34:48
 */

import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { StoreState } from './state';
import { ReduxProps } from '@/types';

export const useSelector: TypedUseSelectorHook<ReduxProps<StoreState>> = useReduxSelector;
