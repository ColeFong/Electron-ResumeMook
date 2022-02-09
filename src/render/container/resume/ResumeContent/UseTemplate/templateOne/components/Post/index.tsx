/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2018.09-2019.09</p>
            <p>网络部干事</p>
          </div>
          <div styleName="right">
            <p>校学生会网络部</p>
            <p>
              计划、组织、协调各年级学生组织的文艺和文化娱乐活动，承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目
            </p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2021.08-2022.02</p>
            <p>前端开发实习生</p>
          </div>
          <div styleName="right">
            <p>Joyy支付研发中心</p>
            <p>
              担任Joyy支付研发中心前端开发实习生，任职期间采用React主导开发，并与Shopline合作，主导开发团队内部工具，内部管理平台及后台管理平台
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
