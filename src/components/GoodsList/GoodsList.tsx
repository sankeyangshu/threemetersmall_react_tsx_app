/*
 * @Description: 商品卡片组件
 * @Author: 王振
 * @Date: 2021-09-07 14:37:31
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 15:35:56
 */
import React, { FC } from 'react';
import moduleCss from './GoodsList.module.less';
import { goodsListType } from '@/types';

const GoodsList: FC<goodsListType> = ({ goodsList }) => {
  return (
    <div className={moduleCss.goods__list}>
      {goodsList.map((item) => (
        <div className={moduleCss.goods} key={item.id}>
          <div className={moduleCss.goods__img}>
            <img src={item.goodsImg} width="160px" height="160px" />
          </div>
          <div className={moduleCss.goods__title}>{item.goodsName}</div>
          <div className={moduleCss.goods__price}>{item.goodsPrice}</div>
        </div>
      ))}
    </div>
  );
};

export default GoodsList;
