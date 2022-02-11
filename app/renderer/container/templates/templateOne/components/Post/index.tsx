/**
 * @desc 在校经历
 * @author Miu
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
            <p>校学生会</p>
            <p>
              计划、组织、协调各年级学生组织的公众号以及视频宣传活动，承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目
            </p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2018.09-2019.04</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>五邑大学网络中心</p>
            <p>
              担任TickNet工作室前端工程师，与五邑大学网络中心合作，围绕微信企业号开发或主导多个应用，任职期间基于微信企业号开发校内闲余市场，采用React主导开发，并与江门XXX科技有限公司合作，主导开发该公司官网及后台管理
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
