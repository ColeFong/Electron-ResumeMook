/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Work() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2022.08-至今</p>
            <p>前端开发实习生</p>
          </div>
          <div styleName="right">
            <p>Joyy</p>
            <p>
              就职于Joyy，担任Joyy支付研发中心前端开发实习生，任职期间采用React主导开发，并与Shopline合作，主导开发团队内部工具，内部管理平台及后台管理平台
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
