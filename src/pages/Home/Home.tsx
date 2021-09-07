/*
 * @Description: 首页模块
 * @Author: 王振
 * @Date: 2021-09-06 10:48:34
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 15:31:55
 */
import React, { useEffect, useState } from 'react';
import moduleCss from './Home.module.less';
import Divider from '@/components/Divider';
import GoodsList from '@/components/GoodsList/GoodsList';
import { NoticeBar, SearchBar, Carousel } from 'zarm';
import { getGoodsListAPI } from '@/api/goods';
import { goodsType } from '@/types';

const Home = () => {
  const images = [
    'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
    'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
    'https://static.zhongan.com/website/health/zarm/images/banners/3.png',
  ]; // 轮播图
  // eslint-disable-next-line no-unused-vars
  const [goodsList, setGoodsList] = useState<goodsType[]>([]); // 商品卡片列表数据

  useEffect(() => {
    // 获取商品列表数据
    getGoodsList();
  }, []);

  // 初始化商品列表
  const getGoodsList = async () => {
    const { data } = await getGoodsListAPI({ pageIndex: 0, pageSize: 10 });
    if (data.goodsList.length !== 0) {
      setGoodsList(data.goodsList);
    }
  };

  return (
    <div className={moduleCss.Home}>
      <NoticeBar closable>该项目仅为示例项目，不用做商业用途，仅供学习！</NoticeBar>
      <SearchBar placeholder="请输入搜索关键词" />
      <Carousel autoPlay loop direction="left">
        {images.map((item, index) => (
          <div key={index} className={moduleCss.wrapper__swipe}>
            <img src={item} alt="" className={moduleCss.wrapper__swipe__img} />
          </div>
        ))}
      </Carousel>
      <Divider text="猜你喜欢" />
      <GoodsList goodsList={goodsList} />
      <Divider text="我是有底线的" />
    </div>
  );
};

export default Home;
