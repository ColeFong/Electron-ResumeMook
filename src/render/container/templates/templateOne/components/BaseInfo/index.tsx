/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：五邑大学</li>
        <li>专业：电子信息工程</li>
        <li>学历：本科</li>
        <li>学年：2018.09 - 2022.06</li>
        <li>籍贯：广东·广州</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
