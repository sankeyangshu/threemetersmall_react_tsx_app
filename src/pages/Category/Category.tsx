/*
 * @Description: 分类模块
 * @Author: 王振
 * @Date: 2021-09-06 14:03:19
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-08 09:55:54
 */
import React, { useEffect, useState } from 'react';
import moduleCss from './Category.module.less';
import { getCategoryListAPI, categoryType } from '@/api/category';

const Category = () => {
  const [categoryList, setCategoryList] = useState<categoryType[]>([]); // 分类列表
  const [currentIndex, setCurrentIndex] = useState(1); // 选中的分类下标

  useEffect(() => {
    // 初始化分类列表
    getCategoryList();
  }, []);

  // 获取分类列表
  const getCategoryList = async () => {
    const { data } = await getCategoryListAPI();
    setCategoryList(data);
  };

  // 切换分类列表
  const OnClickSelectMenu = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={moduleCss.category}>
      <div className={moduleCss.category__left}>
        <ul className={moduleCss.left__total}>
          {categoryList.map((item) => (
            <li
              key={item.id}
              className={currentIndex === item.id ? moduleCss.left_active : null}
              onClick={() => OnClickSelectMenu(item.id)}
            >
              {item.categoryName}
            </li>
          ))}
        </ul>
      </div>
      <section className={moduleCss.category__right}>
        <div className={moduleCss.right__total}>
          {categoryList.map((items, index) => (
            <div key={index}>
              {currentIndex === items.id ? (
                <div>
                  {items.content.map((item) => (
                    <div className={moduleCss.category__right__grid} key={item.id}>
                      <img width="80" height="80" src={item.categoryImg} />
                      <span>{item.categoryName}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
