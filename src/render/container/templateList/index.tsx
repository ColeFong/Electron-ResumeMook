/*
 * @Description:
 * @Author: Miu
 * @LastEditors: Miu
 * @Date: 2022-02-09 17:08:00
 * @LastEditTime: 2022-02-09 18:00:25
 */
import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import MyRectSize from '@common/components/MyRectSize';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <MyRectSize>
          <MyRectSize.Left>
            <Navigation />
          </MyRectSize.Left>
          <MyRectSize.Right>
            <StaticResume />
          </MyRectSize.Right>
        </MyRectSize>
      </div>
    </div>
  );
}
export default TemplateList;
