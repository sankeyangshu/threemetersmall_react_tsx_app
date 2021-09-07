/*
 * @Description: 分割线组件
 * @Author: 王振
 * @Date: 2021-09-07 14:26:35
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-07 14:32:33
 */
import React from 'react';
import moduleCss from './Divider.module.less';

interface textTypes {
  text: string;
}

const Divider: React.FC<textTypes> = ({ text }) => {
  return (
    <div className={moduleCss.divider}>
      <div className={moduleCss.divider__solid}></div>
      <div className={moduleCss.divider__text}>{text}</div>
      <div className={moduleCss.divider__solid}></div>
    </div>
  );
};

export default Divider;
